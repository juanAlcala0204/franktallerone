import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { useForm } from 'react-hook-form'

const CustomModal = ({ modalEstado, setModalEstado, currentUser, finalBalance, updateUser , setFinalBalance}) => {

    const { register, errors, handleSubmit, setValue, reset } = useForm({
        defaultValues: { inputTypeMovement: '1', txtFieldQuantity: "2", txtFieldName: "asdsad" }
    });

    setValue('txtFieldName', currentUser.txtFieldName);

    setValue('txtFieldQuantity', currentUser.txtFieldQuantity);

    setValue('inputTypeMovement', currentUser.inputTypeMovement);

    useEffect(() => {
        const newData = {
            inputTypeMovement: currentUser.inputTypeMovement, txtFieldQuantity: currentUser.txtFieldQuantity, txtFieldName: currentUser.txtFieldName
        }
        reset(newData);

    }, [reset, currentUser]);
    
    const logicGiveFinalBalanceWithNewMovement = (oldFinalBalance, data) => {
        return data.inputTypeMovement !== 'I' ? oldFinalBalance - parseInt(data.txtFieldQuantity) : oldFinalBalance + parseInt(data.txtFieldQuantity)
    }
    
    const onSubmit = (data, e) => {
        e.preventDefault();
        data.id = currentUser.id;
        updateUser(currentUser.id, data);
        setFinalBalance(logicGiveFinalBalanceWithNewMovement(finalBalance, data));
        setModalEstado({
            state: false,
            type: '',
            infoModal: {
                error: false,
                success: false,
                datoExtra: {}
            }
        })
        //addMovement(data);
    }

    const selectMovementIngreso = 'I';
    const selectMovementGasto = 'G';


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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputTypeMovement">Tipo Movimiento:</label>
                                        <select name="inputTypeMovement" className="form-control" ref={
                                            register()
                                        }>
                                            <option value={selectMovementIngreso}>Ingreso</option>
                                            <option value={selectMovementGasto}>Gasto</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtFieldName">Nombre:</label>
                                    <input type="text" className="form-control" name="txtFieldName" ref={
                                        register()
                                    } />
                                </div>
                                <div>
                                    {errors?.txtFieldName?.message}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="txtFieldQuantity">Cantidad:</label>
                                    <input type="text" className="form-control" name="txtFieldQuantity" ref={
                                        register()
                                    } />
                                </div>
                                <div>
                                    {errors?.txtFieldQuantity?.message}
                                </div>
                                <br />
                                <hr />
                                <div className="row">
                                    <div className="col-md-4">
                                        <button className="btn btn-danger" onClick={() => setModalEstado({
                                            state: false,
                                            type: '',
                                            infoModal: {
                                                error: false,
                                                success: false,
                                                datoExtra: {}
                                            }
                                        })}>Cancelar</button>
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
                        ) : modalEstado.type === 'Insert' && (
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