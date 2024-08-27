import React from 'react';
import './TeamStats.css'; // Assuming you'll add some CSS for styling

function TeamStats({ data }) {
    // Get the list of all possible stats (columns) by using the stats of the first team
    const statKeys = Object.keys(data[Object.keys(data)[0]]);

    return (
        // Container div for the team stats section
        <div className="team-stats">
            {/* Heading for the team stats section */}
            <h2>Team Stats</h2>
            
            {/* Table for displaying team statistics */}
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        {statKeys.map((stat) => (
                            <th key={stat}>{stat}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([team, stats]) => (
                        <tr key={team}>
                            <td>{team}</td>
                            {statKeys.map((stat) => (
                                <td key={stat}>{stats[stat]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeamStats;
