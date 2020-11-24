import React, { Fragment, useState } from 'react';
import {formatNumber} from '../assets/js/globals'


const BalanceFields = ({ balance, setBalance, dataMovements, finalBalance, setFinalBalance, balanceChange }) => {


    const textInputBalanceInit = 'Saldo Inicial:';
    const textInputBalanceFinal = 'Saldo Final:';

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="txtInitialBalance">{textInputBalanceInit}</label>
                    <input className="form-control" name="txtInitialBalance" type="text"  onChange={balanceChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="txtFinalBalance">{textInputBalanceFinal}</label>
                    <input className="form-control" type="text" name="txtFinalBalance" value={formatNumber(finalBalance)} disabled/>
                </div>
            </div>
        </div>

    );
}

export default BalanceFields;