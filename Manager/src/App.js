import React, { Component } from 'react';
//import { View,Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

componentWillMount() {
  this.initializeFirebase();
}

initializeFirebase() {
  const firebase = require('firebase');
 // Initialize Firebase
  const config = {
       apiKey: 'AIzaSyAhkhMPM0a0DNVt1JbZ4bF1weGHDXAYm7Y',
       authDomain: 'manager-24712.firebaseapp.com',
       databaseURL: 'https://manager-24712.firebaseio.com',
       projectId: 'manager-24712',
       storageBucket: 'manager-24712.appspot.com',
       messagingSenderId: '140344344275'
     };
    firebase.initializeApp(config);
}
  //componentWillMount() {
  //   const config = {
  //     apiKey: 'AIzaSyAhkhMPM0a0DNVt1JbZ4bF1weGHDXAYm7Y',
  //     authDomain: 'manager-24712.firebaseapp.com',
  //     databaseURL: 'https://manager-24712.firebaseio.com',
  //     projectId: 'manager-24712',
  //     storageBucket: 'manager-24712.appspot.com',
  //     messagingSenderId: '140344344275'
  // };
  //
  // firebase.initializeApp(config);
//  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
