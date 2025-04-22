import React from 'react';

const TeamCard = ({ team }) => {
  const { school, conference, firstPlaceVotes, points, logo } = team;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px' }}>
      <img
        src={logo || 'https://via.placeholder.com/150'}
        alt={`${school} logo`}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <h3>{school}</h3>
      <p>Conference: {conference}</p>
      <p>First Place Votes: {firstPlaceVotes || 'N/A'}</p>
      <p>Points: {points}</p>
    </div>
  );
};

export default TeamCard;