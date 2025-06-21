// Import React and useState from 'react'
import React, { useState, useEffect } from 'react';

// Define the StateTable component
const StateTable = ({ teams }) => {
    // Define selectedStat state and its setter function using useState
    const [selectedStat, setSelectedStat] = useState('points');
    const [availableStats, setAvailableStats] = useState(['points', 'firstPlaceVotes', 'conference']);

    // Debug: Log the first team to see available properties
    useEffect(() => {
        if (teams && teams.length > 0) {
            console.log('First team data:', teams[0]);
            // Get all available properties from the first team
            const properties = Object.keys(teams[0]);
            setAvailableStats(properties.filter(prop => 
                prop !== 'school' && prop !== 'logo' && prop !== 'rank'
            ));
        }
    }, [teams]);

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
                {availableStats.map(stat => (
                    <option key={stat} value={stat}>
                        {stat.charAt(0).toUpperCase() + stat.slice(1)}
                    </option>
                ))}
            </select>
            <table border="1" style={{ width: '100%', marginTop: '10px', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>School</th>
                        <th>{selectedStat.charAt(0).toUpperCase() + selectedStat.slice(1)}</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{team.rank || index + 1}</td>
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