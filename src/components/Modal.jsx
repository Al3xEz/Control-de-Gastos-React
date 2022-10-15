import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setFecha(gastoEditar.fecha);
      setId(gastoEditar.id);
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 400);
    setGastoEditar({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 4000);
      return;
    }
    setBtnDisabled(true);
    guardarGasto({ nombre, cantidad, categoria, id, fecha });
  };

  return (
    <>
      <div className="modal">
        <div className="cerrar-modal">
          <img
            id="cerrar-modal-btn"
            src={CerrarBtn}
            alt="Cerrar Modal"
            onClick={ocultarModal}
          />
        </div>

        <form
          className={`formulario ${animarModal ? "animar" : "cerrar"}`}
          onSubmit={handleSubmit}
        >
          <legend>
            {Object.keys(gastoEditar).length > 0
              ? "Editar Gasto"
              : "Nuevo Gasto"}
          </legend>
          {mensaje && <Mensaje msj={mensaje} tipo="error" />}

          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>
            <input
              value={nombre}
              id="nombre"
              type="text"
              placeholder="Añade el Nombre del Gasto"
              onChange={(event) => {
                setNombre(event.target.value);
              }}
            />
          </div>

          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input
              value={cantidad}
              id="cantidad"
              type="number"
              placeholder="Añade la Cantidad del Gasto: ej. 300"
              onChange={(event) => {
                setCantidad(
                  Number(event.target.value) > 0
                    ? Number(event.target.value)
                    : ""
                );
              }}
            />
          </div>

          <div className="campo">
            <label htmlFor="categoria">Categoria</label>

            <select
              value={categoria}
              name="categoria"
              id="categoria"
              onChange={(event) => {
                setCategoria(event.target.value);
              }}
            >
              <option value="">-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="varios">Gastos Varios</option>
              <option value="hobbies">Hobbies</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>

          <input
            disabled={btnDisabled}
            type="submit"
            value={
              Object.keys(gastoEditar).length > 0
                ? "Editar Gasto"
                : "Añadir Gasto"
            }
          />
        </form>
      </div>
    </>
  );
};

export default Modal;
