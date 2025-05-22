import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to view profile details.</div>;
  }

  return (
    <div>
      <h1></h1>
      <img src={user?.picture} alt={user?.name} style={{ borderRadius: '50%' }} />
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Profile;