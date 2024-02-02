"use client";
import EmailForm from "./Forms/EmailForm";
import UserForm from "./Forms/UserForm";
import { useFormState } from "./FormContext";
import PasswordForm from "./Forms/PasswordForm";
import SentForm from "./Forms/SentForm";

function FormStep() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <UserForm />;
    case 2:
      return <EmailForm />;
    case 3:
      return <PasswordForm />;
    case 4:
      return <SentForm />;
  }
}

export default FormStep;
