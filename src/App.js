import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SystemSettings from './pages/Settings';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './css/style.css';
import UsersPage from './pages/ic/UsersPage';
import LogPage from './pages/ms/LogPage';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/settings" component={SystemSettings} />
          <PrivateRoute path="/ic/users" component={UsersPage} />
          <PrivateRoute path="/ms/log" component={LogPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;