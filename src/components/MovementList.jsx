import React from 'react'
import NavbarMovementList from './NavbarMovementList'
import List from './List'

const MovementList = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header">Listado Movimientos</div>
                <div className="card-body">
                    <div className="container">
                        <br />
                        <div className="row">
                            <div className="col-md-12">
                                <NavbarMovementList />

                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-12">
                                <List />

                            </div>
                        </div>
                        <br />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovementList;