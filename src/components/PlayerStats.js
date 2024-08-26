import React from 'react';

function PlayerStats({ data }) {
    return (
        <div className="player-stats">
            <h2>Player Stats</h2>
            {Object.entries(data).map(([player, stats]) => (
                <div key={player} className="player">
                    <h3>{player}</h3>
                    <ul>
                        {Object.entries(stats).map(([stat, value]) => (
                            <li key={stat}><strong>{stat}:</strong> {value}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default PlayerStats;
