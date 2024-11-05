import { FormConfig } from '../types';

const form1Config: FormConfig = {
  name: "Basic Information Form",
  formId: 1,
  controls: [
    {
      type: "input",
      controlName: "name",
      label: "Full Name",
      inputLabel: "Enter your full name"
    },
    {
      type: "input",
      controlName: "age",
      label: "Age",
      inputLabel: "Enter your age"
    },
    {
      type: "input",
      controlName: "dob",
      label: "Date of Birth",
      inputLabel: "Enter your date of birth"
    },
    {
      type: "checkbox-group",
      controlName: "address",
      label: "Address",
      options: [
        {
          label: "Street Address",
          value: "streetAddress",
          type: "input",
          controlName: "streetAddress",
          inputLabel: "Enter street address"
        },
        {
          label: "City",
          value: "city",
          type: "input",
          controlName: "city",
          inputLabel: "Enter city"
        },
        {
          label: "State/Province",
          value: "state",
          type: "input",
          controlName: "state",
          inputLabel: "Enter state/province"
        },
        {
          label: "Postal Code",
          value: "postalCode",
          type: "input",
          controlName: "postalCode",
          inputLabel: "Enter postal code"
        },
        {
          label: "Country",
          value: "country",
          type: "input",
          controlName: "country",
          inputLabel: "Enter country"
        }
      ]
    }
  ]
};

export default form1Config;