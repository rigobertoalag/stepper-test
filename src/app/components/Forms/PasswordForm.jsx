"use client";
import { useForm } from "react-hook-form";
import { useFormState } from "../FormContext";

export default function PasswordForm() {
  const { handleBack, handleNext, setFormData, formData } = useFormState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  function onHandleFormSubmit(data) {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    handleNext();
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="w-full flex flex-col justify-center items-center ">
        <label htmlFor="password" className="mt-4">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa tu password"
          {...register("password", { required: true })}
          required
        />

        {errors.password && (
          <p className="bg-red-400 text-xs p-2 rounded-md mt-4">
            Ingresa un valor
          </p>
        )}

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
  );
}
