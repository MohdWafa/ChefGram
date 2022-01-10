import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';

const App = () => (
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
);

export default App;
