import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  gastos,
  setGastos,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, item) => total + item.cantidad,
      0
    );
    setGastado(totalGastado);
    setDisponible(presupuesto - totalGastado);

    //Calcular el porcentaje gastado
    const nuevoPorcentaje = ((totalGastado / presupuesto) * 100).toFixed(2);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 500);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const resultado = confirm("Desea reiniciar el presupuesto y los gastos?");
    if (resultado) {
      setPresupuesto(0);
      setGastos([]);
      setIsValidPresupuesto(false);
      localStorage.clear();
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>

        <p className={`${disponible <= 0 ? "negativo" : ""}`}>
          <span>Disponible: </span>
          {formatearCantidad(disponible)}
        </p>

        <p>
          <span>Gastado: </span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
