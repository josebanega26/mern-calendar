import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="h-screen">
      <Provider store={store}>
        <Router>
          <AppRouter></AppRouter>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
