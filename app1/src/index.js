import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import test1 from './test1';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  test1,
  document.getElementById('test1')
);


class Hello extends React.Component {
  render() {
    return <div>Second task: Create {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="Component" />,
  document.getElementById('test2')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
