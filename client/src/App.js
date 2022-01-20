import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        {/* <Routes>
        <Route path='/' element={<Landing />} />
      </Routes> */}

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Routes>

        {/* <Routes>
       
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes> */}
      </Fragment>
    </Router>
  </Provider>
);

export default App;
