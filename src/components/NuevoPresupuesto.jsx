import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (event) => {
    event.preventDefault();

    if (presupuesto <= 0) {
      setMensaje("No es un presupuesto valido");
      setIsValidPresupuesto(false);
      return;
    }
    localStorage.setItem("presupuesto", presupuesto ?? 0);
    setMensaje("");
    setIsValidPresupuesto(true);
  };

  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handlePresupuesto}>
          <div className="campo">
            <label htmlFor="">Definir Presupuesto</label>
            <input
              value={presupuesto <= 0 ? "" : presupuesto}
              type="number"
              className="nuevo-presupuesto"
              placeholder="Presupuesto"
              onChange={(event) => setPresupuesto(Number(event.target.value))}
            />
          </div>
          <input type="submit" value="Añadir" />

          {mensaje && <Mensaje tipo="error" msj={mensaje} />}
        </form>
      </div>
    </>
  );
};

export default NuevoPresupuesto;
