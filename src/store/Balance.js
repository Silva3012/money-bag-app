import React, { useState } from "react";
import { useSelector } from "react-redux";

//Gomponent that retrieves the current balance from the Redux store and display it.
const Balance = () => {
    // Get the current balance from the Redux store using the useSelector hook
    const balance = useSelector(state => state.balance);

    // State for input field and set default value to empty string
    const [inputAmount, setInputAmount] = useState("");

    //Function to handle input change in input field
    const handleInputChange = (e) => {
        setInputAmount(e.target.value);
    }

    //Function to handle deposit button click
    const handleDeposit = () => {
        if (inputAmount) {
            const depositAmount = parseFloat(inputAmount);
            if (!isNaN(depositAmount) && depositAmount > 0) {
                //dispatch deposit action with deposit amount
                //code for dispatching deposit goes here
                setInputAmount("");
            }
        }
    }

    //Function to handle withdrawal button click
    const handleWithdrawal = () => {
        if (inputAmount) {
            const withdrawalAmount = parseFloat(inputAmount);
            if (!isNaN(withdrawalAmount) && withdrawalAmount > 0) {
                // dispatch withdrawal action with withdrawal amount
                // code for dispatching withdrawal action goes here
                setInputAmount("");
            }
        }
    }

    //Function to handle interest button click
    const handleInterest = () => {
        // dispatch interest action
        // code for dispatching interest action goes here
    }

    const handleCharge = () => {
        // dispatch charge action
        // code for dispatching charge action goes here
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