import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
//import from './App.css';
import store from './store';
import { Header, TodoWrapper } from './components';

class App extends Component {
  render() {
    return ( 
      <Provider store={store}>
        <div>
        <Header/>
        <TodoWrapper/>  
        </div>
      </Provider>    
    );
  }
}

export default App;
