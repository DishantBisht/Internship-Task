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
            <Main />
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
