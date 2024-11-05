export interface FormOption {
  label: string;
  value: string;
  type?: string;
  controlName?: string;
  inputLabel?: string;
  children?: FormControl[];
}

export interface FormControl {
  type: 'checkbox-group' | 'radio-group' | 'input' | 'checkbox-input';
  controlName: string;
  label: string;
  options?: FormOption[];
  children?: FormControl[];
  inputLabel?: string;
  level?: string;
}

export interface FormStepConfig {
  heading: string;
  controls: FormControl[];
}

export interface FormConfig {
  name: string;
  formId: number;
  steps: FormStepConfig[];
}