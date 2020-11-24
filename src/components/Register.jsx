import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';


const Register = ({ modalFunction: chooseModalOpen, setDataTabulator, setDataMovements, dataMovements, finalBalance, setFinalBalance }) => {

    const { register, errors, handleSubmit } = useForm();

    const logicGiveFinalBalanceWithNewMovement = (oldFinalBalance, data) => {
        return data.inputTypeMovement !== 'I' ? oldFinalBalance - parseInt(data.txtFieldQuantity) : oldFinalBalance + parseInt(data.txtFieldQuantity)
    }

    const addMovement = async (data) => {
        if (finalBalance < parseInt(data.txtFieldQuantity) && data.inputTypeMovement === 'G') {
            return chooseModalOpen({ error: true, success: false, datoExtra: { typeMovement: 'G' } }, 'Insert');
        }
        data.id = uuidv4();
        setDataMovements([
            ...dataMovements,
            data
        ])
        setDataTabulator([
            ...dataMovements,
            data
        ]);

        setFinalBalance(logicGiveFinalBalanceWithNewMovement(finalBalance, data));
        (data.inputTypeMovement === 'I')
            ? chooseModalOpen({ error: false, success: true, datoExtra: { typeMovement: 'I' } }, 'Insert')
            : (data.inputTypeMovement === 'G') && chooseModalOpen({ error: false, success: true, datoExtra: { typeMovement: 'G' } }, 'Insert')
    }

    const onSubmit = (data, e) => {
        console.log(data);
        addMovement(data);
        e.target.reset();
    }

    const selectMovementIngreso = 'I';
    const selectMovementGasto = 'G';
    return (
        <div>
            <div className="card">
                <div className="card-header">Registro Movimiento</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputTypeMovement">Tipo Movimiento:</label>
                                <select name="inputTypeMovement" className="form-control" ref={
                                    register({
                                        required: { value: true, message: 'Campo Requerido' }
                                    })
                                }>
                                    <option value={selectMovementIngreso}>Ingreso</option>
                                    <option value={selectMovementGasto}>Gasto</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtFieldName">Nombre:</label>
                            <input type="text" className="form-control" name="txtFieldName" ref={
                                register({
                                    required: { value: true, message: 'Campo Requerido' }
                                })
                            } />
                        </div>
                        <div>
                            {errors?.txtFieldName?.message}
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtFieldQuantity">Cantidad:</label>
                            <input type="text" className="form-control" name="txtFieldQuantity" ref={
                                register({
                                    required: { value: true, message: 'Campo Requerido' }
                                })
                            } />
                        </div>
                        <div>
                            {errors?.txtFieldQuantity?.message}
                        </div>
                        <br />
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <button className="btn btn-danger">Cancelar</button>
                            </div>
                            <div className="col-md-3"></div>
                            <div className="col-md-5">
                                <button type="submit" className="btn btn-success" >Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;