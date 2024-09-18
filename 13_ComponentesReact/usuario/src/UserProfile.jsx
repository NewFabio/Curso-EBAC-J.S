import React from 'react';

function UserProfile({name, email, bio}) {
    return (
        <div style={{padding: '20px', border: '1px solid #ccc', borderRadius: '5px', margin: '20px'}}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>{bio}</p>
        </div>
    );
}

export default UserProfile;