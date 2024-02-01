"use client";

import { useForm } from "react-hook-form";
import { useFormState } from "../FormContext";

export default function UserForm() {
  const { handleNext, setFormData, formData } = useFormState();

  const { register, handleSubmit } = useForm({
    defaultValues: formData,
  });

  function onHandleFormSubmit(data) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="w-full flex flex-col justify-center items-center ">
        <label htmlFor="name" className="mt-4">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          {...register("name")}
          required
        />

        <button className="bg-blue-500 p-2 rounded-md mt-4">Siguiente</button>
      </div>
    </form>
  );
}
