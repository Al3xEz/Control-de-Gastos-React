import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import NuevoGasto from "./components/NuevoGasto";
import { generarId } from "./helpers";
import Filtro from "./components/Filtro";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 400);
    }
  }, [gastoEditar]);

  useEffect(() => {
    Number(localStorage.getItem("presupuesto")) > 0 &&
      setIsValidPresupuesto(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(
        (item) => item.categoria === filtro
      );
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosActualizados = gastos.map((item) =>
        item.id === gasto.id ? gasto : item
      );
      setGastos(gastosActualizados);
    } else {
      gasto.id = generarId(); //Se le agrega el id unico al gasto.
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]); //Se agrega el gasto al array de gastos.
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
      setGastoEditar({});
    }, 400);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        setGastos={setGastos}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtro filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              setGastos={setGastos}
            />
          </main>

          <NuevoGasto
            gastoEditar={gastoEditar}
            setGastoEditar={setGastoEditar}
            guardarGasto={guardarGasto}
            modal={modal}
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
          />
        </>
      )}
    </div>
  );
}

export default App;
