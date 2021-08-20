import React from 'react';

const Statistics = () => {
  return (
    <div className="widget estadisticas">
      <h3 className="titulo">Estadisticas</h3>
      <div className="contenedor d-flex flex-wrap">
        <div className="caja">
          <h3>15.236</h3>
          <p>Visitas</p>
        </div>
        <div className="caja">
          <h3>1831</h3>
          <p>Registros</p>
        </div>
        <div className="caja">
          <h3>$160.648</h3>
          <p>Ingresos</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
