import React from 'react';
import './ConferenceStandings.css'; // Assuming you'll add some CSS for styling

function ConferenceStandings({ conferenceName, teamsData }) {
    // Sort teams by total_wins (descending)
    const sortedTeams = Object.entries(teamsData)
        .filter(([_, team]) => team.conference === conferenceName)
        .sort(([, a], [, b]) => b.total_wins - a.total_wins);

    return (
        <div className="conference-standings">
            <h2>{conferenceName}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Games Played</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Win %</th>
                        {/* Add more headers for the remaining stats */}
                    </tr>
                </thead>
                <tbody>
                    {sortedTeams.map(([teamName, stats]) => (
                        <tr key={teamName}>
                            <td>{teamName}</td>
                            <td>{stats.games_played}</td>
                            <td>{stats.total_wins}</td>
                            <td>{stats.total_losses}</td>
                            <td>{stats.win_percentage}</td>
                            {/* Add more cells for the remaining stats */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ConferenceStandings;
