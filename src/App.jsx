import React, { useEffect, useState } from 'react'; // Importing necessary modules
import TeamCard from './components/TeamCard'; // Importing TeamCard component
import StateTable from './components/StatsTable'; // Importing StateTable component

const App = () => {
  const [teams, setTeams] = useState([]); // Initializing state for teams
  const [loading, setLoading] = useState(true); // Initializing state for loading

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // Using basketball API instead of football for March Madness
        const response = await fetch('https://ncaa-api.henrygd.me/rankings/basketball/mens/associated-press');
        const data = await response.json(); // Parsing response data
        console.log('API Response:', data); // Debug log to see the data structure
        setTeams(data.rankings || []); // Updating teams state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error); // Handling error if data fetching fails
      } finally {
        setLoading(false); // Setting loading state to false
      }
    };

    fetchTeams(); // Calling fetchTeams function
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Displaying loading message if data is still loading
  }

  return (
    <div>
      <h1>NCAA March Madness Stats</h1> // Heading for the app
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} /> // Rendering TeamCard component for each team
        ))}
      </div>
      <StateTable teams={teams} /> // Rendering StateTable component with teams data
    </div>
  );
};

export default App; // Exporting App component
