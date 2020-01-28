import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Protected</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path='/protected' component={FriendsList} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
