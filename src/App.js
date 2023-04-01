import React from 'react';
import './App.css';
import Balance from './store/Balance';


function App() {
  return (
    <div className='App'>
      <h1>Your Money Bag</h1>
      {/* Balance component */}
      <Balance />
    </div>
  );
}

export default App;
