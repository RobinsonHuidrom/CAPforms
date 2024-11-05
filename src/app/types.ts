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

export interface FormConfig {
  name: string;
  formId: number;
  controls: FormControl[];
}

export interface FilteredOption {
  label?: string;
  input?: string;
  children?: Record<string, any>;
}