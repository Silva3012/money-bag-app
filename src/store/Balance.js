import React from "react";
import { useSelector } from "react-redux";

//Gomponent that retrieves the current balance from the Redux store and display it.
const Balance = () => {
    // Get the current balance from the Redux store using the useSelector hook
    const balance = useSelector(state => state.balance);

    //Function to handle input change in input field
    const handleInputChange = (e) => {
        setInputAmount(e.target.value);
    }

    return (
        <div>
            {/* Display the current balance */}
            <h2>Current Balance</h2>
            <p>{balance}</p>
            {/* Input filed for user to input a deposit */}
            <input 
                type="text"
                value={inputAmount}
                onChange={handleInputChange}
                placeholder="Enter an amount"
            />

            {/* Buttons for deposit, withdrawal, interest, and charge functions */}
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithdrawal}>Withdrawal</button>
            <button onClick={handleInterest}>Interest</button>
            <button onClick={handleCharge}>Charge</button>
        </div>
    )
};

export default Balance;