import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /**
   * @param {number} num - Number
   */
  const sumNum = (num) => {
    return num + num;
  };
  sumNum('hello'); // oowww

  /**
   * @typeof {Object} obj
   * @property {string} hello
   * @property {string} name
   * @property {age} age
   */
  const obj = {
    hello: 'world',
    name: 'miguel',
    age: 2,
  };
  obj.age = 'a';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
