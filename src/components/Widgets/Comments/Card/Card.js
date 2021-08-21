import React from 'react';
import { Link } from 'react-router-dom';
import { CheckLg, XCircleFill, TrashFill } from 'react-bootstrap-icons';

const Card = ({ userImage, name, post, text }) => {
  return (
    <div className="comentario d-flex flex-wrap">
      <div className="foto">
        <Link to="#">
          <img src={userImage} alt="" width="100" />
        </Link>
      </div>
      <div className="texto">
        <Link to="#">{name}</Link>
        <p>
          en <Link to="#">{post}</Link>
        </p>
        <p className="texto-comentario d-flex flex-wrap">{text}</p>
      </div>
      <div className="botones d-flex justify-content-start flex-wrap w-100">
        <button className="aprobar">
          <CheckLg />
          Aprobar
        </button>
        <button className="eliminar">
          <TrashFill />
          Eliminar
        </button>
        <button className="bloquear">
          <XCircleFill />
          Bloquear
        </button>
      </div>
    </div>
  );
};

export default Card;
