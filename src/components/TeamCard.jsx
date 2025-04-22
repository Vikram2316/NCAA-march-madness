import React from 'react'; // Importing React library

const TeamCard = ({ team }) => { // Defining a functional component called TeamCard
    const { school, conference, firstPlaceVotes, points, logo } = team; // Destructuring the 'team' object
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px' }}>
            <img
                src={logo || 'https://via.placeholder.com/150'} // Displaying the team logo or a placeholder image
                alt={`${school} logo`} // Setting the alt text for the team logo
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} // Styling for the team logo
            />
            <h3>{school}</h3> // Displaying the school name
            <p>Conference: {conference}</p> // Displaying the conference name
            <p>First Place Votes: {firstPlaceVotes || 'N/A'}</p> // Displaying the number of first place votes or 'N/A' if not available
            <p>Points: {points}</p> // Displaying the number of points
        </div>
    );
};

export default TeamCard; // Exporting the TeamCard component
