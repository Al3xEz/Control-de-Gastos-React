import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  setGastos,
  gastosFiltrados,
  filtro,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          {gastosFiltrados.length > 0 ? (
            <h2>Gastos</h2>
          ) : (
            <h2>No hay gastos</h2>
          )}
          {gastosFiltrados.map((gasto) => {
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
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
