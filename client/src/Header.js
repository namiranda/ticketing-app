import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ currentUser }) => {
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
    <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">GitTix</Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};