import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {

    const { user } = useAuth0();

    return (
        <div>
            <h1>This is the profile page</h1>
            <p>{user?.name}</p>
            <p>{user?.picture}</p>
        </div>
    )
}

export default Profile;