import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';
import Register from './Register';
import MovementList from './MovementList'
import CustomModal from './CustomModal'
import '../assets/css/App.css'
import { v4 as uuidv4 } from 'uuid';
import { formatNumber } from '../assets/js/globals'


const App = () => {

  const [modalEstado, setModalEstado] = useState({
    state: false,
    type: '',
    infoModal: {
      error: false,
      success: false,
      datoExtra: {}
    }
  });

  const movementsDataInitial = [
    
  ]

  const [currentUser, setCurrentUser] = useState({
    id: null,
    txtFieldName: '',
    txtFieldQuantity: '',
    inputTypeMovement: ''
  });

  const [dataMovements, setDataMovements] = useState(movementsDataInitial)
  const [dataTabulator, setDataTabulator] = useState([])
  const [balance, setBalance] = useState(0);
  const [finalBalance, setFinalBalance] = useState(0);


  const editRow = (movement) => {
    const newMovement = {
      id: movement.id,
      txtFieldName: movement.txtFieldName,
      txtFieldQuantity: movement.txtFieldQuantity,
      inputTypeMovement: movement.inputTypeMovement
    }
    setCurrentUser({
      ...newMovement
    })
  }
  const logicForLoadNewMovementUpdate = (id, updateUser) => {
    const dataMovementTemp = dataMovements.map(movement => ((movement.id === id) ? updateUser : movement));

    setDataTabulator(dataMovementTemp);
    return dataMovementTemp;
  }
  const updateUser = (id, updateUser) => {
    const dataUpdate = logicForLoadNewMovementUpdate(id, updateUser);
    setDataMovements(dataUpdate)
  }

  const logicGiveFinalBalanceWithDeleteMovement = (data) => {

    let calculateOfTheMovements = 0;
    for (let elemento of data) {
      calculateOfTheMovements = elemento.inputTypeMovement !== 'I' ? calculateOfTheMovements - parseInt(elemento.txtFieldQuantity) : calculateOfTheMovements + parseInt(elemento.txtFieldQuantity);
    }
    return calculateOfTheMovements;
  }

  const deleteMovement = (data) => {
    const dataMovementsFiltred = dataMovements.filter(movement => movement.id !== data.id);
    setDataMovements(dataMovementsFiltred);
    setDataTabulator(dataMovementsFiltred);
    setFinalBalance(logicGiveFinalBalanceWithDeleteMovement(dataMovementsFiltred));
  }

  const chooseModalOpen = (infoData, typeModal) => {
    switch (typeModal) {
      case 'Edit':
        setModalEstado({
          state: true
          , type: 'Edit',
          infoModal: {
            error: false,
            success: false,
            datoExtra: {}
          }
        });
        break;
      case 'Delete':
        setModalEstado({
          state: true,
          type: 'Delete',
          infoModal: {
            error: false,
            success: false,
            datoExtra: {}
          }
        });
        break;
      case 'Insert':
        setModalEstado({
          state: true,
          type: 'Insert',
          infoModal: { ...infoData }
        });
      default:
        console.log('fallo switch');
        break;
    }
  }



  const balanceChange = (event) => {
    if (!event.target.value) {
      return setFinalBalance(0);
    }
    let calculateOfTheMovements = 0;
    for (let elemento of dataMovements) {
      calculateOfTheMovements = elemento.inputTypeMovement !== 'I' ? calculateOfTheMovements - parseInt(elemento.txtFieldQuantity) : calculateOfTheMovements + parseInt(elemento.txtFieldQuantity);
    }
    setFinalBalance(parseInt(event.target.value) + calculateOfTheMovements);

  }

  return (
    <div className="container">
      <section>
        <Navbar balance={balance}
          setBalance={setBalance}
          dataMovements={dataMovements}
          finalBalance={finalBalance}
          setFinalBalance={setFinalBalance}
          balanceChange={balanceChange} />
      </section>

      <section className="section-cards">
        <div className="row">
          <div className="col-md-4">
            <Register modalFunction={chooseModalOpen}
              dataTabulator={dataTabulator}
              setDataTabulator={setDataTabulator}
              setDataMovements={setDataMovements}
              dataMovements={dataMovements}
              finalBalance={finalBalance}
              setFinalBalance={setFinalBalance} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <MovementList modalFunction={chooseModalOpen} dataMovements={dataMovements} dataTabulator={dataTabulator} setDataTabulator={setDataTabulator} editRow={editRow} deleteMovement={deleteMovement} />

          </div>
        </div>
      </section>

      <CustomModal modalEstado={modalEstado} setModalEstado={setModalEstado} currentUser={currentUser} finalBalance={finalBalance} updateUser={updateUser} setFinalBalance={setFinalBalance} />
    </div>
  );
}

export default App;
