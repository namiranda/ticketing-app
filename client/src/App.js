import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Landing from './routes/Landing';

export default function App({currentUser}) {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
            <Link className="nav-link" to={href}>{label}</Link>
        </li>
      );
    });
  return (
    <Router>
      <div>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">GitTix</Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/auth/signup">
            <SignUp />
          </Route>
          <Route path="/auth/signin">
            <SignIn/>
          </Route>
          <Route path="/">
            <Landing/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
