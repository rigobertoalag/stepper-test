"use client";
import { useForm } from "react-hook-form";
import { useFormState } from "../FormContext";
import { useState } from "react";

export default function PasswordForm() {
  const { handleBack, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm({ defaultValues: formData });

  const [isCreated, setIsCreated] = useState(false);

  function onHandleFormSubmit(data) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setIsCreated(true);
  }

  return (
    <>
      {isCreated ? (
        <pre>{JSON.stringify(formData)}</pre>
      ) : (
        <form className="w-full" onSubmit={handleSubmit(onHandleFormSubmit)}>
          <div className="w-full flex flex-col justify-center items-center ">
            <label htmlFor="password" className="mt-4">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu password"
              {...register("password")}
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
              <button className="bg-blue-500 p-2 rounded-md mt-4">Crear</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
