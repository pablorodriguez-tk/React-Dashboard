import React from 'react';
import {
  HouseDoorFill,
  FileEarmarkTextFill,
  PeopleFill,
  GearFill,
  BoxArrowRight,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <aside className="barra-lateral col-12 col-sm-auto p-0">
      <div className="logo">
        <h2 className="py-4 m-0">Dashboard</h2>
      </div>
      <nav className="menu d-flex d-sm-block justify-content-center flex-wrap">
        <Link to="#">
          <HouseDoorFill />
          Inicio
        </Link>
        <Link to="#">
          <FileEarmarkTextFill />
          Entradas
        </Link>
        <Link to="#">
          <PeopleFill />
          Usuarios
        </Link>
        <Link to="#">
          <GearFill />
          Configuracion
        </Link>
        <Link to="#">
          <BoxArrowRight />
          Salir
        </Link>
      </nav>
    </aside>
  );
};

export default Menu;
