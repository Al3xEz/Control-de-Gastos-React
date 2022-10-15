import { useState, useEffect } from "react";
import IconoNuevoGasto from "../img/nuevo-gasto.svg";
import Modal from "./Modal";

const NuevoGasto = ({
  guardarGasto,
  setModal,
  animarModal,
  setAnimarModal,
  modal,
  gastoEditar,
  setGastoEditar,
}) => {
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 400);
  };

  return (
    <>
      <div className="nuevo-gasto">
        <img
          src={IconoNuevoGasto}
          alt="Icono Nuevo Gasto"
          onClick={handleNuevoGasto}
        />
      </div>

      {modal && (
        <Modal
          setGastoEditar={setGastoEditar}
          gastoEditar={gastoEditar}
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </>
  );
};

export default NuevoGasto;
