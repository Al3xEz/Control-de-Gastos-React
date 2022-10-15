import React from "react";

const Mensaje = ({ msj, tipo }) => {
  return <div className={`alerta ${tipo}`}>{msj}</div>;
};

export default Mensaje;
