import React from 'react';
import { PencilFill } from 'react-bootstrap-icons';
const NewEntry = () => {
  return (
    <div className="widget nueva_entrada">
      <h3 className="titulo">Nueva Entrada</h3>
      <form>
        <input type="text" placeholder="titulo de la entrada" />
        <textarea
          placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, libero.
"
        />
        <div className="d-flex justify-content-center">
          <button>
            <PencilFill />
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewEntry;
