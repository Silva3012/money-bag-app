import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";

//use the configureStore function to create the Redux store with the initial state
const store = configureStore({
    reducer: {
        balance: balanceReducer
    },
});

//export the store to be used in the rest of the application
export default store;