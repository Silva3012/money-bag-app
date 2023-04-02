import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdrawal, interest, charge} from "./balanceSlice";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


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
        <Container className="d-flex justify-content-center">
            <Row>
                <Col>
                    {/* Display the current balance */}
                    <h2 className="text-center">Current Balance</h2>
                    <p className="text-center">R{balance.balance.toFixed(2)}</p>
                    {/* Input filed for user to input a deposit */}
                    <Form.Control 
                        type="text"
                        value={inputAmount}
                        onChange={handleInputChange}
                        placeholder="Enter an amount"
                        className="mb-3"
                    />
                </Col>

                <Col lg className="d-flex flex-column">
                    {/* Buttons for deposit, withdrawal, interest, and charge functions */}
                    <Button className="w-100 my-2" variant="primary" onClick={handleDeposit}>Deposit</Button>
                    <Button className="w-100 my-2" variant="outline-primary" onClick={handleWithdrawal}>Withdraw</Button>
                    <Button className="w-100 my-2" variant="secondary" onClick={handleInterest}>Interest</Button>
                    <Button className="w-100 my-2" variant="outline-secondary" onClick={handleCharge}>Charge</Button>
                </Col>
            </Row>
        </Container>
    )    
};

export default Balance;