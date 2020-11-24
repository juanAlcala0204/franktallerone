import React, { useState } from 'react';

const Register = ({ modalFunction: chooseModalOpen}) => {

    const [datos, setDatos] = useState({
        txtFieldName: '',
        txtFieldQuantity: ''
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
    }

    const sendData = (event) => {
        event.preventDefault();
        chooseModalOpen('', 'Insert');
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">Registro Movimiento</div>
                <div className="card-body">
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
                            <input type="text" className="form-control"  name="txtFieldName" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtFieldQuantity">Cantidad:</label>
                            <input type="text" className="form-control"  name="txtFieldQuantity" onChange={handleInputChange}/>
                        </div>
                        <br/>
                        <hr/>
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