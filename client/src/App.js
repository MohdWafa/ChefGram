import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import EditProfile from './components/profile-forms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth.js';
import setAuthToken from './utils/setAuthToken.js';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              {/* <Route path='/' element={<Landing />} /> */}
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route
                path='dashboard'
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path='create-profile'
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                path='edit-profile'
                element={<PrivateRoute component={EditProfile} />}
              />
              <Route
                path='add-experience'
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                path='add-education'
                element={<PrivateRoute component={AddEducation} />}
              />
            </Routes>
          </section>

          {/* <Routes>
       
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
