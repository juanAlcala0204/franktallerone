import React, { Fragment } from 'react';
import BalanceFields from './BalanceFields'
import '../assets/css/Navbar.css';


const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-light bg-dark justify-content-between">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="react" />
                    </div>
                    <div className="col-md-6">
                        <h4>Tittle</h4>
                    </div>
                </div>
                <form className="form-inline">
                    <BalanceFields />
                </form>
            </nav>
        </Fragment>

    );
}

export default Navbar;