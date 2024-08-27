import React from 'react';
import './PlayerStats.css'; // Assuming you'll add some CSS for styling

function PlayerStats({ data }) {
    // Get the list of all possible stats (columns) by using the first player's stats
    const statKeys = Object.keys(data[Object.keys(data)[0]]);

    return (
        <>
            {/* Player Stats header outside of the main container */}
            <h2>Player Stats</h2>

            {/* The table inside the main container */}
            <div className="player-stats">
                <table>
                    <thead>
                        <tr>
                            <th>Player</th>
                            {statKeys.map((stat) => (
                                <th key={stat}>{stat}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(data).map(([player, stats]) => (
                            <tr key={player}>
                                <td>{player}</td>
                                {statKeys.map((stat) => (
                                    <td key={stat}>{stats[stat]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PlayerStats;
