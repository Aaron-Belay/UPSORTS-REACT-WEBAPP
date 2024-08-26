import React from 'react';

// Define the TeamStats component that takes 'data' as a prop
function TeamStats({ data }) {
    return (
        // Container div for the team stats section
        <div className="team-stats">
            {/* Heading for the team stats section */}
            <h2>Team Stats</h2>

            {/* Map over each entry in the 'data' object */}
            {Object.entries(data).map(([team, stats]) => (
                // Container div for each team's stats
                <div key={team} className="team">
                    {/* Heading for each team */}
                    <h3>{team}</h3>

                    {/* Unordered list for the team's statistics */}
                    <ul>
                        {/* Map over each entry in the 'stats' object for the current team */}
                        {Object.entries(stats).map(([stat, value]) => (
                            // List item for each statistic with its value
                            <li key={stat}>
                                <strong>{stat}:</strong> {value}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

// Export the TeamStats component for use in other parts of the application
export default TeamStats;
