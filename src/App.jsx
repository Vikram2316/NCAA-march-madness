import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';
import StateTable from './StateTable';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://ncaa-api.henrygd.me/rankings/football/fbs/associated-press');
        const data = await response.json();
        setTeams(data.rankings || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>NCAA March Madness Stats</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
      <StateTable teams={teams} />
    </div>
  );
};

export default App;