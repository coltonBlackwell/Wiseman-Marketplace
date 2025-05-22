import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <AuthNav />
    </nav>
  );
}

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div style={{ float: 'right' }}>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default Navbar;
