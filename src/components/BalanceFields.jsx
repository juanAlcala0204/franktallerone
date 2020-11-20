import React, { Fragment } from 'react';

const BalanceFields = () => {

    const textInputBalanceInit = 'Saldo Inicial:';
    const textInputBalanceFinal = 'Saldo Final:';

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="txtInitialBalance">{textInputBalanceInit}</label>
                    <input className="form-control" name="txtInitialBalance" type="text"  />
                </div>
                <div className="col-md-6">
                    <label htmlFor="txtFinalBalance">{textInputBalanceFinal}</label>
                    <input className="form-control" type="text" name="txtFinalBalance"  />
                </div>
            </div>
        </div>

    );
}

export default BalanceFields;