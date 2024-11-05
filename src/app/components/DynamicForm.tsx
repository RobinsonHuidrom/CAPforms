import React, { useState, useMemo } from 'react';
import { FieldArray, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormPreview from './FormPreview';
import { FormConfig, FormControl, FormOption, FilteredOption } from '../types';

interface DynamicFormProps {
  formConfig: FormConfig;
}

interface TextInputProps {
  name: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ name, placeholder, disabled }) => (
  <Field
    type="text"
    name={name}
    placeholder={placeholder}
    disabled={disabled}
    className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
);

const resetControlValues = (
  control: FormControl,
  setFieldValue: (field: string, value: any) => void,
  parentPath: string
) => {
  if (!control) return;

  if (control.type === 'checkbox-group') {
    control.options?.forEach((option, index) => {
      setFieldValue(`${parentPath}.${control.controlName}[${index}].checked`, false);
      if (option.type === 'input') {
        setFieldValue(`${parentPath}.${control.controlName}[${index}].input`, '');
      }
      option.children?.forEach(child => {
        if (child) resetControlValues(child, setFieldValue, `${parentPath}.${control.controlName}[${index}]`);
      });
    });
  } else if (control.type === 'checkbox-input') {
    setFieldValue(`${parentPath}.${control.controlName}.isChecked`, false);
    setFieldValue(`${parentPath}.${control.controlName}.inputText`, '');
  } else if (control.type === 'input') {
    setFieldValue(`${parentPath}.${control.controlName}`, '');
  } else if (control.type === 'radio-group') {
    setFieldValue(`${parentPath}.${control.controlName}.selected`, '');
    control.options?.forEach(option => {
      if (option.type === 'input' && option.controlName) {
        setFieldValue(`${parentPath}.${control.controlName}.inputs.${option.controlName}`, '');
      }
    });
  }
};

const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig }) => {
  const [isPreview, setIsPreview] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, any> | null>(null);

  const initializeControlValues = (control: FormControl, acc: Record<string, any>): void => {
    if (!control) return;

    if (control.type === 'checkbox-group') {
      acc[control.controlName] = control.options?.map(option => {
        const optionValue = { checked: false, input: '' };
        if (option.children) {
          option.children.forEach(child => {
            if (child) initializeControlValues(child, optionValue);
          });
        }
        return optionValue;
      }) || [];
    } else if (control.type === 'checkbox-input') {
      acc[control.controlName] = { isChecked: false, inputText: '' };
    } else if (control.type === 'input') {
      acc[control.controlName] = '';
    } else if (control.type === 'radio-group') {
      acc[control.controlName] = { selected: '', inputs: {} };
      control.options?.forEach(option => {
        if (option.type === 'input' && option.controlName) {
          acc[control.controlName].inputs[option.controlName] = '';
        }
      });
    } else {
      acc[control.controlName] = false;
    }
  };

  const initialValues = useMemo(() => {
    const acc: Record<string, any> = {};
    if (formConfig && formConfig.controls) {
      formConfig.controls.forEach(control => {
        if (control) initializeControlValues(control, acc);
      });
    }
    return acc;
  }, [formConfig]);

  const validationSchema = Yup.object().shape({});

  const filterFormData = (values: Record<string, any>, formConfig: FormConfig) => {
    const filteredData: Record<string, any> = {};

    const recursiveFilter = (data: Record<string, any>, controls: FormControl[], level = 0) => {
      const result: Record<string, any> = {};

      controls.forEach(control => {
        if (!control) return;

        if (control.type === 'checkbox-group') {
          const selectedOptions = data[control.controlName]
            .map((option: any, index: number) => {
              const optionConfig = control.options?.[index];
              if (option.checked || option.isChecked || option.selected || option.inputText || option.input) {
                const filteredOption: FilteredOption = {
                  label: optionConfig?.label,
                  input: option.input || option.inputText || '',
                };
                if (optionConfig?.children && optionConfig.children.length > 0) {
                  const filteredChildren = recursiveFilter(option, optionConfig.children, level + 1);
                  if (Object.keys(filteredChildren).length > 0) {
                    filteredOption.children = filteredChildren;
                  }
                }
                return filteredOption;
              }
              return null;
            })
            .filter(Boolean);

          if (selectedOptions.length > 0) {
            result[control.label] = selectedOptions;
          }
        } else if (control.type === 'radio-group') {
          if (data[control.controlName].selected) {
            result[control.label] = {
              value: data[control.controlName].selected,
              inputs: data[control.controlName].inputs
            };
          }
        } else if (control.type === 'checkbox-input') {
          if (data[control.controlName].isChecked) {
            result[control.label] = {
              value: data[control.controlName].inputText
            };
          }
        } else if (control.type === 'input' && data[control.controlName]) {
          result[control.label] = {
            value: data[control.controlName]
          };
        }
      });

      return result;
    };

    if (formConfig && formConfig.controls) {
      const filteredFormData = recursiveFilter(values, formConfig.controls);
      if (Object.keys(filteredFormData).length > 0) {
        filteredData[formConfig.name] = filteredFormData;
      }
    }

    return filteredData;
  };

  const handlePreview = (values: Record<string, any>) => {
    const filteredData = filterFormData(values, formConfig);
    setFormValues(filteredData);
    setIsPreview(true);
  };

  const handleFinalSubmit = async () => {
    try {
      const response = await fetch('/api/saveFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formId: formConfig.formId, data: formValues }),
      });
      if (!response.ok) {
        throw new Error('Failed to save form data');
      }
      alert('Form data saved successfully!');
      setIsPreview(false);
    } catch (error) {
      console.error(error);
      alert('An error occurred while saving the form data');
    }
  };

  const renderControl = (
    control: FormControl,
    values: Record<string, any>,
    setFieldValue: (field: string, value: any) => void,
    parentControlName = '',
    level = 0,
    parentChecked = true
  ) => {
    if (!control) return null;

    const controlName = parentControlName ? `${parentControlName}.${control.controlName}` : control.controlName;
    const paddingLeft = level > 0 ? `${level * 20}px` : '0px';
    const isDisabled = !parentChecked;

    if (control.type === 'checkbox-group') {
      return (
        <div key={controlName} className="mb-4" style={{ paddingLeft }}>
          <label className="block text-sm font-medium text-gray-700">{control.label}</label>
          <FieldArray name={controlName}>
            {() => (
              <div className="border-l-2 pl-4">
                {control.options?.map((option, index) => (
                  <div key={`${controlName}[${index}]`} className="mb-2">
                    <div className="flex items-center">
                      <Field
                        type="checkbox"
                        name={`${controlName}[${index}].checked`}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        disabled={isDisabled}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const isChecked = e.target.checked;
                          setFieldValue(`${controlName}[${index}].checked`, isChecked);
                          if (!isChecked) {
                            option.children?.forEach(child => {
                              if (child) resetControlValues(child, setFieldValue, `${controlName}[${index}]`);
                            });
                            if (option.type === 'input') {
                              setFieldValue(`${controlName}[${index}].input`, '');
                            }
                          }
                        }}
                      />
                      <label className="ml-2 text-sm text-gray-900">
                        {option.label || option.value}
                      </label>
                    </div>
                    {values[control.controlName][index].checked && option.type === 'input' && (
                      <div className="ml-6 mt-1">
                        <TextInput
                          name={`${controlName}[${index}].input`}
                          placeholder={option.inputLabel}
                          disabled={isDisabled}
                        />
                      </div>
                    )}
                    {option.children && option.children.length > 0 && (
                      <div className="ml-6 mt-2">
                        {option.children.map(child => {
                          if (child) {
                            return renderControl(
                              child,
                              values[control.controlName][index],
                              setFieldValue,
                              `${controlName}[${index}]`,
                              level + 1,
                              values[control.controlName][index].checked
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </FieldArray>
        </div>
      );
    }

    if (control.type === 'radio-group') {
      return (
        <div key={controlName} className="mb-4" style={{ paddingLeft }}>
          <label className="block text-sm font-medium text-gray-700">{control.label}</label>
          <div className="border-l-2 pl-4">
            {control.options?.map((option, index) => (
              <div key={`${controlName}[${index}]`} className="mb-2">
                <div className="flex items-center">
                  <Field
                    type="radio"
                    name={`${controlName}.selected`}
                    value={option.value}
                    className="h-4 w-4 text-indigo-600 border-gray-300"
                    disabled={isDisabled}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const isSelected = e.target.checked;
                      setFieldValue(`${controlName}.selected`, isSelected ? option.value : '');
                      if (!isSelected && option.type === 'input') {
                        setFieldValue(`${controlName}.inputs.${option.controlName}`, '');
                      }
                    }}
                  />
                  <label className="ml-2 text-sm text-gray-900">{option.label || option.value}</label>
                </div>
                {values[control.controlName].selected === option.value && option.type === 'input' && (
                  <div className="mt-2">
                    <TextInput
                      name={`${controlName}.inputs.${option.controlName}`}
                      placeholder={option.inputLabel}
                      disabled={isDisabled}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (control.type === 'checkbox-input') {
      return (
        <div key={controlName} className="mb-4" style={{ paddingLeft }}>
          <div className="flex items-center">
            <Field
              type="checkbox"
              name={`${controlName}.isChecked`}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              disabled={isDisabled}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const isChecked = e.target.checked;
                setFieldValue(`${controlName}.isChecked`, isChecked);
                if (!isChecked) {
                  setFieldValue(`${controlName}.inputText`, '');
                }
              }}
            />
            <label className="ml-2 text-sm text-gray-900">{control.label}</label>
          </div>
          {values[control.controlName].isChecked && (
            <div className="ml-6 mt-1">
              <TextInput
                name={`${controlName}.inputText`}
                placeholder={control.inputLabel}
                disabled={isDisabled}
              />
            </div>
          )}
        </div>
      );
    }

    if (control.type === 'input') {
      return (
        <div key={controlName} className="mb-4" style={{ paddingLeft }}>
          <label className="block text-sm font-medium text-gray-700">{control.label}</label>
          <TextInput
            name={controlName}
            placeholder={control.inputLabel}
            disabled={isDisabled}
          />
        </div>
      );
    }

    return null;
  };

  if (!formConfig || !formConfig.controls) {
    return <div>No form configuration available</div>;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handlePreview}
    >
      {({ values, setFieldValue }) => (
        !isPreview ? (
          <Form className="space-y-4">
            {formConfig.controls.map(control => renderControl(control, values, setFieldValue))}
            <button
              type="submit"
              className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Preview
            </button>
          </Form>
        ) : (
          <FormPreview
            formValues={formValues}
            onEdit={() => setIsPreview(false)}
            onSubmit={handleFinalSubmit}
          />
        )
      )}
    </Formik>
  );
};

export default DynamicForm;