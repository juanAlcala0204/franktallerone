import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

const CustomModal = ({ modalEstado, setModalEstado }) => {
    console.log(modalEstado);
    const [datos, setDatos] = useState({
        txtFieldName: '',
        txtFieldQuantity: ''
    });

    const sendData = (event) => {
        event.preventDefault();
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    return (

        <Modal isOpen={modalEstado.state}>
            <ModalHeader>
                {
                    modalEstado.type === 'Edit' && (<div><h3>Editar Movimiento</h3></div>)
                }
                {
                    modalEstado.type === 'Delete' && (<div><h3>Eliminar Movimiento</h3></div>)
                }
                {
                    modalEstado.type === 'Insert' && (<div><h3>Insertar Movimiento</h3></div>)
                }

            </ModalHeader>
            <ModalBody>
                {
                    modalEstado.type === 'Edit' && (
                        <div>

                            <form onSubmit={sendData}>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputTypeMovement">Tipo Movimiento:</label>
                                        <select id="inputTypeMovement" className="form-control">
                                            <option >Elige...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtFieldName">Nombre:</label>
                                    <input type="text" className="form-control" name="txtFieldName" onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtFieldQuantity">Cantidad:</label>
                                    <input type="text" className="form-control" name="txtFieldQuantity" onChange={handleInputChange} />
                                </div>
                                <br />
                                <hr />
                                <div className="row">
                                    <div className="col-md-4">
                                        <button className="btn btn-danger" onClick={() => setModalEstado(false)}>Cancelar</button>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-5">
                                        <button type="submit" className="btn btn-success" >Agregar</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    )
                }
                {
                    modalEstado.type === 'Delete' && (
                        <div><h3>Se elimino correctamente</h3></div>
                    )
                }
                {
                    modalEstado.type === 'Insert' && (
                        <div><h3>Se guardo correctamente</h3></div>
                    )
                }

            </ModalBody>
            <ModalFooter>
                {
                    modalEstado.type !== 'Edit' && (
                        <button className="btn btn-danger" onClick={() => setModalEstado(false)}>Cancelar</button>
                    )
                }
                
            </ModalFooter>
        </Modal>


    );
}

export default CustomModal;