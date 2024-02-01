import { FormProvider } from "./components/FormContext";
import FormStep from "./components/FormStep";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="bg-slate-200 p-4">
        <h1>Pantalla inicial</h1>

        <FormProvider>
          <FormStep />
        </FormProvider>
      </div>
    </div>
  )
}
