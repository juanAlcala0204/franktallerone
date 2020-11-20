import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">Registro</div>
                <div className="card-body">
                    <form>
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
                            <input type="text" className="form-control" id="txtFieldName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="txtFieldQuantity">Cantidad:</label>
                            <input type="text" className="form-control" id="txtFieldQuantity" />
                        </div>
                        <br/>
                        <hr/>
                        <div className="row">
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-danger">Cancelar</button>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-6">
                                <button className="btn btn-success">Agregar Movimiento</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;