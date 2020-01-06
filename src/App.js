import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from '../../react-redux-demo/src/components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>

  );
}

export default App;
