import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PakemonListContainer from './PakemonList';
import store from './redux/store';
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PakemonListContainer/>
      </Provider>
    );
  }
}

export default App;
