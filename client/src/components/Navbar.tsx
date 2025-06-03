import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-100 to-emerald-100 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-teal-800 font-bold text-xl">Wiseman Collectables</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/" 
                  className="text-teal-700 hover:bg-teal-50 hover:text-teal-900 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Home
                </Link>
                <Link 
                  to="/checkout" 
                  className="text-teal-700 hover:bg-teal-50 hover:text-teal-900 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Cart
                </Link>
                <Link 
                  to="/profile" 
                  className="text-teal-700 hover:bg-teal-50 hover:text-teal-900 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-700 hover:text-teal-900 hover:bg-teal-50 focus:outline-none transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          <AuthNav />
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="text-teal-700 hover:bg-teal-50 hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/checkout" 
            className="text-teal-700 hover:bg-teal-50 hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cart
          </Link>
          <Link 
            to="/profile" 
            className="text-teal-700 hover:bg-teal-50 hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="ml-4 flex items-center md:ml-6">
      {isAuthenticated ? (
        <LogoutButton className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition duration-300" />
      ) : (
        <LoginButton className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition duration-300" />
      )}
    </div>
  );
}

export default Navbar;