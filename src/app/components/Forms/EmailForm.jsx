"use client";
import { useForm } from "react-hook-form";
import { useFormState } from "../FormContext";

export default function EmailForm() {
  const { handleNext, handleBack, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm({ defaultValues: formData });

  function onHandleFormSubmit(data) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  }
  return (
    <form className="w-full" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="w-full flex flex-col justify-center items-center ">
        <label htmlFor="email" className="mt-4">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu email"
          {...register("email")}
          required
        />
        <div className="flex flex-row gap-1">
          <button
            type="button"
            className="bg-blue-500 p-2 rounded-md mt-4"
            onClick={handleBack}
          >
            Regresar
          </button>
          <button className="bg-blue-500 p-2 rounded-md mt-4">Siguiente</button>
        </div>
      </div>
    </form>
  );
}
