// Import React and useState from 'react'
import React, { useState } from 'react';

// Define the StateTable component
const StateTable = ({ teams }) => {
    // Define selectedStat state and its setter function using useState
    const [selectedStat, setSelectedStat] = useState('points');

    // Define handleStatChange function to update selectedStat based on user selection
    const handleStatChange = (event) => {
        setSelectedStat(event.target.value);
    };

    // Render the component
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

// Export the StateTable component as the default export
export default StateTable;