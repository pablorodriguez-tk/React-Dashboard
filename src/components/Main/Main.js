import React from 'react';
import Statistics from '../Widgets/Statistics/Statistics';
import NewEntry from '../Widgets/NewEntry/NewEntry';

const Main = () => {
  return (
    <main className="main col">
      <div className="row">
        <div className="columna col-12 col-lg-7">
          <NewEntry />
        </div>
        <div className="columna col-12 col-lg-5">
          <Statistics />
        </div>
      </div>
    </main>
  );
};

export default Main;
