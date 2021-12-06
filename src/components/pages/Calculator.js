import React, { useState } from "react";


const Calculator = () => {
    const [Installment, setInstallment] = useState(
        {
            total: "",
            months: ""
        }
    )

    const [Install, setInstall] = useState(
        {
            total: "",
            months: "",
            install: ""
        }
    )

    const inputHandler = (e) => {
        setInstallment((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    
    }

    function installmentCalculator() {
        let ttl = Number(Installment.total);
        let mhs = Number(Installment.months);
        let isl = ttl / mhs;

        setInstall({
            total: Installment.total,
            months: Installment.months,
            install: isl
        });
    }

    const resetInput = () => {
        setInstallment({
            total: "",
            months: ""
        });
    }

    const actions = () => {
        installmentCalculator();
        resetInput();
    }

    return (
        <div id="jobs-container">
            <h1> Installment Calculator </h1>
            <div id="calculator">
                <label>
                    <h2>Total</h2>
                    <input className="input-field" type="text" value={ Installment.total } onChange={ inputHandler } name="total" />    
                </label>
                <label>
                    <h2>Months</h2>
                    <input className="input-field" type="text" value={ Installment.months } onChange={ inputHandler } name="months" />    
                </label>
                <input className="submit-button" type="submit" value="Calculate" onClick={ actions } />
            </div>
            <h1>Installments</h1>
            <div>
                <h3>Your installment for ${ Install.total } is ${ Install.install } per month, [ { Install.months } months ]</h3>
            </div>
        </div>
    );
}


export default Calculator;






