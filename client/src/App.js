import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import Navbar from './components/Navigation/Navbar';
import MainArea from './components/MainArea';

// Pages
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <Switch>
        {!auth.logged ? (
          <Auth />
        ) : (
          <>
            <Navbar />
            <MainArea>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/dashboard" />}
              />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/analytics" component={Analytics} />
              <Route exact path="/settings" component={Settings} />
            </MainArea>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
