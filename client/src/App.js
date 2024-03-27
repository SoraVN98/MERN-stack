import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import PrivateRouting from './components/routing/PrivateRouting';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';

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
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route
                path='/dashboard'
                element={<PrivateRouting component={Dashboard} />}
              />
              <Route
                path='/create-profile'
                element={<PrivateRouting component={CreateProfile} />}
              />
              <Route
                path='/edit-profile'
                element={<PrivateRouting component={EditProfile} />}
              />
              <Route
                path='/add-experience'
                element={<PrivateRouting component={AddExperience} />}
              />
              <Route
                path='/add-education'
                element={<PrivateRouting component={AddEducation} />}
              />
            </Routes>
          </section>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
