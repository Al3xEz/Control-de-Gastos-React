import { useState, useEffect } from "react";

const Filtro = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="filtro">Filtrar Gastos</label>
          <select
            value={filtro}
            name="filtro"
            id="filtro"
            onChange={(event) => setFiltro(event.target.value)}
          >
            <option value="">Todos</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="varios">Gastos Varios</option>
            <option value="hobbies">Hobbies</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtro;
