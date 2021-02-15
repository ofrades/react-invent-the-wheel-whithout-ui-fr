import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incNum = () => {
    setCount(count + 1);
  };

  /**
   * @param {number} num - Number
   */
  const decNum = (num) => {
    setCount(count - num);
  };

  /**
   * @typeof {Object} obj
   * @property {string} hello
   * @property {string} name
   * @property {age} age
   */
  const obj = {
    message: 'hello',
    name: 'miguel',
    count: count,
  };

  obj.age = 1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {obj.message} {obj.name} {obj.count}
        </p>
        <button onClick={incNum}>+</button>
        <button onClick={() => decNum(1)}>-</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
