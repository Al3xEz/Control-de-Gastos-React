import { useState } from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos }) => {
  return (
    <div className="listado-gastos contenedor">
      {gastos.length > 0 ? <h2>Gastos</h2> : <h2>No hay gastos</h2>}

      {gastos.map((gasto) => {
        return <Gasto key={gasto.id} gasto={gasto} />;
      })}
    </div>
  );
};

export default ListadoGastos;
