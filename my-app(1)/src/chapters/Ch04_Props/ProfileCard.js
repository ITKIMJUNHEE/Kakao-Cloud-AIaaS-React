import React from 'react';

function ProfileCard(props) {
  return (
    <div className="profile-card" style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <img src={props.avatarUrl} alt="Profile" style={{ width: '50px' }} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

function ProfileApp() {
  return (
    <div>
      <ProfileCard
        avatarUrl="https://via.placeholder.com/50"
        name="Jack"
        bio="Frontend Developer"
      />
      <ProfileCard
        avatarUrl="https://via.placeholder.com/50"
        name="Jane"
        bio="Backend Developer"
      />
    </div>
  );
}

export default ProfileApp;