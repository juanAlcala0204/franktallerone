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
            [event.target.name]: event.target.value,
        })
    }

    const { typeMovement = false } = modalEstado.infoModal.datoExtra;
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
                    modalEstado.type === 'Insert' && modalEstado.infoModal.error
                        ? (<div><h3>Error</h3></div>)
                        : modalEstado.infoModal.success && (<div><h3>Registro Exitoso</h3></div>)
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
                    modalEstado.type === 'Insert' && modalEstado.infoModal.error
                        ? (
                            <div><hr /><h5>No cuentas con suficiente saldo para realizar este movimiento.</h5><hr /></div>
                        ) : (
                            <div><hr /><h5>Registro exitoso {
                                typeMovement === 'G' && typeMovement
                                    ? (<h5> del movimiento tipo Gasto.</h5>)
                                    : typeMovement === 'I' && typeMovement
                                    && (<h5> del movimiento tipo Ingreso.</h5>)}</h5><hr /></div>
                        )
                }

            </ModalBody>
            <ModalFooter>
                {
                    modalEstado.type !== 'Edit' && (
                        <button className="btn btn-danger" onClick={() => setModalEstado({
                            state: false,
                            type: '',
                            infoModal: {
                                error: false,
                                success: false,
                                datoExtra: {}
                            }
                        })}>Cancelar</button>
                    )
                }

            </ModalFooter>
        </Modal>


    );
}

export default CustomModal;