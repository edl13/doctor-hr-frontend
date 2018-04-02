import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import logo from './logo.svg';
import './App.css';
import EmailField from './GetData.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Heart Monitor 5000</h1>
          </header>
          <EmailField />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
