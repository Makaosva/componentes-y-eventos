import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const validarForm = (e) => {
    e.preventDefault();

    if (nombre === "" || apellido === "" || edad === "" || password === "") {
      setError(true);
      return;
    }
    setError(false);
  };
  return (
    <div>
      <form onSubmit={validarForm}>
        {error ? <p>Los input son obligatorios</p> : null}

        <div className="form-group">
          <input
            className="form-control"
            value="Nombre"
            type="text"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            className="form-control"
            value="Apellido"
            type="text"
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            className="form-control"
            value="Edad"
            type="number"
            onChange={(e) => setEdad(e.target.value)}
          />
          <input
            className="form-control"
            value="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            Entrada: {nombre}
            {apellido}
          </p>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
