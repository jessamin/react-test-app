import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Elements from './task1';
import Comp from './task2';
import PureComp from './task3';
import Func from './task4';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  Elements,
  document.getElementById('task1')
);

ReactDOM.render(
  <Comp />,
  document.getElementById('task2')
);

ReactDOM.render(
  <PureComp />,
  document.getElementById('task3')
);

ReactDOM.render(
  Func(),
  document.getElementById('task4')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
