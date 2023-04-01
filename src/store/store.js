import { configureStore } from "@reduxjs/toolkit";

//Defining the initial state of the store, which includes the balance property
const initialState = {
    balance: 0
};

//use the configureStore function to create the Redux store with the initial state
const store = configureStore({
    reducer: {
        //reducers will go here later on
    },
    preloadedState: initialState,
});

//export the store to be used in the rest of the application
export default store;