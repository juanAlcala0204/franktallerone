import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Register from './Register';
import MovementList from './MovementList'
import '../assets/css/App.css'

const App = () => {
  return (
    <div className="container">
      <section>
        <Navbar />
      </section>

      <section className="section-cards">
        <div className="row">
          <div className="col-md-5">
            <Register />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <MovementList />

          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
