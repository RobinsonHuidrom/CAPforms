import React from 'react';

interface FormPreviewProps {
  formValues: any;
  onEdit: () => void;
  onSubmit: () => void;
}

const FormPreview: React.FC<FormPreviewProps> = ({ formValues, onEdit, onSubmit }) => {
  const renderNestedData = (data: any, level = 0) => {
    if (!data) return null;
    const paddingLeft = `${level * 20}px`;
    return (
      <ul style={{ paddingLeft }}>
        {Object.entries(data).map(([key, value]) => {
          if (Array.isArray(value)) {
            return (
              <li key={key} className="mb-2">
                <strong className="text-gray-700">{key}</strong>
                <ul className="list-disc ml-4">
                  {value.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item.label}
                      {item.input && `: ${item.input}`}
                      {item.children && renderNestedData(item.children, level + 1)}
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else if (typeof value === 'object' && value !== null) {
            return (
              <li key={key} className="mb-2">
                <strong className="text-gray-700">{key}</strong>
                {renderNestedData(value, level + 1)}
              </li>
            );
          } else {
            // Ensure value is a valid ReactNode
            const reactValue = typeof value === 'string' || typeof value === 'number' ? value : null;
            return (
              <li key={key} className="mb-1">
                <strong className="text-gray-700">{key}:</strong> {reactValue}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900">Preview</h2>
      <div className="bg-gray-100 p-4 rounded overflow-auto">
        {renderNestedData(formValues)}
      </div>
      <button
        onClick={onEdit}
        className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Edit
      </button>
      <button
        onClick={onSubmit}
        className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </div>
  );
};

export default FormPreview;