"use client";
import { createContext, useContext, useState } from "react";

const FormContext = createContext({
  handleNext: () => {},
  handleBack: () => {},
  step: 1,
  formData: {
    name: "",
    email: "",
    password: "",
  },
  setFormData: () => {},
});

export function FormProvider({ children }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleNext = () => {
    setStep((prevValue) => prevValue + 1);
  };
  const handleBack = () => {
    setStep((prevValue) => prevValue - 1);
  };

  console.log("formData", formData);

  return (
    <FormContext.Provider
      value={{ handleNext, handleBack, step, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
