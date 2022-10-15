import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import NuevoGasto from "./components/NuevoGasto";
import { generarId } from "./helpers";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const guardarGasto = (gasto) => {
    gasto.id = generarId(); //Se le agrega el id unico al gasto.
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]); //Se agrega el gasto al array de gastos.

    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos gastos={gastos} />
          </main>

          <NuevoGasto
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
