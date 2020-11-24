import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';
import Register from './Register';
import MovementList from './MovementList'
import CustomModal from './CustomModal'
import '../assets/css/App.css'



const App = () => {

  const [modalEstado, setModalEstado] = useState({
    state: false,
    type: ''
  });

  const chooseModalOpen = (infoData, typeModal) => {
    switch (typeModal) {
      case 'Edit':
        setModalEstado({
          state: true
          ,type: 'Edit'});
        break;
      case 'Delete':
        setModalEstado({
          state: true,
          type: 'Delete'
        });
        break;
      case 'Insert':
        setModalEstado({
          state: true,
          type: 'Insert'
        });
      default:
        console.log('fallo switch');
        break;
    }
  }

  return (
    <div className="container">
      <section>
        <Navbar />
      </section>

      <section className="section-cards">
        <div className="row">
          <div className="col-md-4">
            <Register modalFunction={chooseModalOpen}/>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <MovementList modalFunction={chooseModalOpen}/>

          </div>
        </div>
      </section>
      
      <CustomModal modalEstado={ modalEstado} setModalEstado={setModalEstado} />
    </div>
  );
}

export default App;
