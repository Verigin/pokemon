import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Pakemon from './pokemon/Pokemon';
import store from './redux/store';
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Pakemon/>
      </Provider>
    );
  }
}

export default App;
