import React, { useState } from 'react';

const StateTable = ({ teams }) => {
  const [selectedStat, setSelectedStat] = useState('points');

  const handleStatChange = (event) => {
    setSelectedStat(event.target.value);
  };

  return (
    <div>
      <h2>Team Stats Table</h2>
      <label htmlFor="stat-select">Select Stat: </label>
      <select id="stat-select" value={selectedStat} onChange={handleStatChange}>
        <option value="points">Points</option>
        <option value="firstPlaceVotes">First Place Votes</option>
        <option value="conference">Conference</option>
      </select>
      <table border="1" style={{ width: '100%', marginTop: '10px', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>School</th>
            <th>{selectedStat}</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{team.school}</td>
              <td>{team[selectedStat] || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateTable;