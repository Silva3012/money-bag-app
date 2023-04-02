import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdrawal, interest, charge} from "./balanceSlice";

//Component that retrieves the current balance from the Redux store and display it.
const Balance = () => {
    // Get the current balance from the Redux store using the useSelector hook
    const balance = useSelector(state => state.balance);
    // console.log("balance:", balance);


    // Get the dispatch function from the useDispatch hook
    const dispatch = useDispatch();

    // State for input field and set default value to empty string
    const [inputAmount, setInputAmount] = useState("");

    //Function to handle input change in input field
    const handleInputChange = (e) => {
        setInputAmount(e.target.value);
    };

    //Function to handle deposit button click
    const handleDeposit = () => {
        if (inputAmount) {
            const depositAmount = parseFloat(inputAmount);
            if (!isNaN(depositAmount) && depositAmount > 0) {
                //dispatch deposit action with deposit amount
                dispatch(deposit(depositAmount));
                setInputAmount("");
            } else {
                alert("Please enter a valid deposit amount.");
                setInputAmount("");
            }
        }
    };

    //Function to handle withdrawal button click
    const handleWithdrawal = () => {
        if (inputAmount) {
            const withdrawalAmount = parseFloat(inputAmount);
            if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
                alert("Please enter a valid withdrawal amount.");
                setInputAmount("");
                return;
            }
            const currentBalance = balance.balance;
            if (currentBalance < withdrawalAmount) {
                alert("Insufficient balance. Please enter a lower amount");
                setInputAmount("");
                return;
            }
            // dispatch withdrawal action with withdrawal amount
            dispatch(withdrawal(withdrawalAmount));
            setInputAmount("");
        }
    };

    //Function to handle interest button click
    const handleInterest = () => {
        // dispatch interest action
        dispatch(interest());
    }

    const handleCharge = () => {
        // dispatch charge action
        dispatch(charge());
    }

    return (
        <div>
            {/* Display the current balance */}
            <h2>Current Balance</h2>
            <p>R{balance.balance.toFixed(2)}</p>
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