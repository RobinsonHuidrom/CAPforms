"use client";

import { useState } from 'react';
import DynamicForm from './components/DynamicForm';
import FormSelection from './components/FormSelection';
import forms from './formConfigs';
import { FormConfig } from './types';

export default function Home() {
  const [selectedForm, setSelectedForm] = useState<FormConfig | null>(null);

  const handleFormSelected = (formId: string) => {
    const form = forms.find(f => f.formId === parseInt(formId));
    setSelectedForm(form || null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <FormSelection forms={forms} onFormSelected={handleFormSelected} />
      {selectedForm && <DynamicForm key={selectedForm.formId} formConfig={selectedForm} />}
    </div>
  );
}