import React, { Component } from 'react';
import Compteur from './Compteur';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compteur: 0
    };

    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickSubtract = this.onClickSubtract.bind(this);
  }

  onClickAdd() {
    this.setState(prevState => ({
      compteur: prevState.compteur + 1
    }));
  }

  onClickSubtract() {
    this.setState(prevState => ({
      compteur: prevState.compteur - 1
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Compteur</h1>
        <Compteur
          compteur={this.state.compteur}
          onClickAdd={this.onClickAdd}
          onClickSubtract={this.onClickSubtract}
        />
      </div>
    );
  }
}

export default App;