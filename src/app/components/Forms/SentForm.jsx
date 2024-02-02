import { useState } from "react";
import { useFormState } from "../FormContext";

function SentForm() {
  const { formData } = useFormState();
  const [dataSent, setDataSent] = useState(false);
  const [errorSent, setErrorSent] = useState("");

  function handleSubmit(formData) {
    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setDataSent(true);
      })
      .catch((err) => {
        setErrorSent(err);
      });
  }
  return (
    <div>
      {!dataSent ? (
        <>
          <h3>Los datos a enviar son:</h3>
          <p>Nombre: {formData.name}</p>
          <p>Correo: {formData.email}</p>
          <p>Contraseña: {formData.password}</p>

          <button onClick={() => handleSubmit(formData)}>Enviar</button>
        </>
      ) : (
        <h3>Datos enviados correctamente</h3>
      )}

      {errorSent && <p>{errorSent}</p>}
    </div>
  );
}

export default SentForm;
