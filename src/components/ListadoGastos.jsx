import { useState } from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, setGastoEditar, setGastos }) => {
  return (
    <div className="listado-gastos contenedor">
      {gastos.length > 0 ? <h2>Gastos</h2> : <h2>No hay gastos</h2>}

      {gastos.map((gasto) => {
        return (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            setGastos={setGastos}
            gastos={gastos}
          />
        );
      })}
    </div>
  );
};

export default ListadoGastos;
