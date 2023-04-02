import React from 'react';
import './App.css';
import Balance from './store/Balance';


function App() {
  return (
    <div className='App justify-content-center'>
      <h1 className='text-center'>Welcome to Money Bag</h1>
      {/* Balance component */}
      <Balance />
    </div>
  );
}

export default App;
