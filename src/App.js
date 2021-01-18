import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/mainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
          <nav className="navbar navbar-dark bg-dark justify-content-center">
          <h2>Findmind Internship Task</h2></nav>
            <Main />
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
