import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = ["data1!","data2!","data3!","data4!","data5!","data6!"];
//data.map((str) => <td>{str}</td>);
const rows = [(<tr key={0}>{data.map((str) => <td key={str}>{str}</td>)}</tr>), 
  (<tr key={1}>{data.map((str) => <td key={str}>{str}</td>)}</tr>)];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Table rows={rows} />
      </div>
    );
  }
}

function Table (props) {
  const rows = props.rows;
  return (
    <table><tbody>{rows}</tbody></table>
  );
}

export default App;
