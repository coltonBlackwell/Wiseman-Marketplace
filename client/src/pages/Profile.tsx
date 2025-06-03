import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
        <div className="w-12 h-12 border-4 border-indigo-100 border-t-indigo-500 rounded-full animate-spin mx-auto"></div>
        <p className="text-center text-gray-500 mt-4">Loading your profile...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg animate-fade-in">
        <div className="text-center p-6 bg-gray-50 rounded-xl text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 mx-auto mb-4 text-indigo-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
          <p className="text-lg">Please log in to view your profile details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-white rounded-2xl shadow-lg animate-fade-in">
      <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">Your Profile</h1>
      
      <img 
        src={user?.picture} 
        alt={user?.name} 
        className="w-32 h-32 rounded-full border-4 border-indigo-500 mx-auto mb-6 object-cover animate-pulse hover:scale-105 transition-transform"
      />
      
      <div className="bg-gray-50 rounded-xl p-4 mb-3">
        <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Email</span>
        <span className="block text-gray-800 font-medium">{user?.email}</span>
      </div>
      
      {user?.nickname && (
        <div className="bg-gray-50 rounded-xl p-4 mb-3">
          <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Username</span>
          <span className="block text-gray-800 font-medium">@{user?.nickname}</span>
        </div>
      )}
    
    </div>
  );
};

export default Profile;