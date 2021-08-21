import React from 'react';
import { Database } from '../../../utils/Database';
import Card from './Card/Card';

const Comments = () => {
  return (
    <div className="widget comentarios">
      <h3 className="titulo">Comentarios</h3>
      <div className="contenedor">
        {Database.map((user) => (
          <Card
            userImage={user.img}
            text={user.text}
            post={user.post}
            name={user.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
