import React from 'react'
import '../assets/css/NavbarMovementList.css'

const NavbarMovementList = () => {
    return (
        <nav className="navbar navbar-light bg-light">
                <div className="row">
                    <div className="col-md-5">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />

                    </div>
                    <div className="col-md-7">
                    <div className="form-check form-check-inline styleCheckboxCustom">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"  />
                        <label className="form-check-label textColorInput" htmlFor="inlineRadio1">Todos</label>
                    </div>
                    <div className="form-check form-check-inline styleCheckboxCustom">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"  />
                        <label className="form-check-label textColorInput" htmlFor="inlineRadio2">Ingreso</label>
                    </div>
                    <div className="form-check form-check-inline styleCheckboxCustom">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"  />
                        <label className="form-check-label textColorInput" htmlFor="inlineRadio2">Gasto</label>
                    </div>
                    </div>
                </div>
               
                    
        </nav>
    );
}

export default NavbarMovementList;