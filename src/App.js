import React, { useState } from 'react';
import TeamStats from './components/TeamStats/TeamStats';
import PlayerStats from './components/PlayerStats/PlayerStats';
import Header from './components/Header';
import ConferenceStandings from './components/ConferenceStandings/ConferenceStandings';
import data from './data/usportsData.json';
import './App.css';

/*J Larosili's Name is scuffed for some reason*/

function App() {
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [step, setStep] = useState(1);

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setStep(2);
    };

    const handleCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory);
        setStep(3);
    };

    const conferences = ['OUA West', 'OUA East', 'CW', 'RSEQ', 'AUS', 'OUA Central']; // Add your conferences here

    return (
        <div className="App">
            {step === 1 && (
                <div className="title-page">
                    <h1>Welcome to the USports Basketball Stats</h1>
                    <p>Select the League:</p>
                    <div className="buttons">
                        <button onClick={() => handleGenderSelect('mens')}>Men's</button>
                        <button onClick={() => handleGenderSelect('womens')}>Women's</button>
                    </div>
                </div>
            )}

        {step === 2 && (
            <div className="category-page">
                <h2>{gender === 'mens' ? "Men's" : "Women's"} Basketball</h2>
                <p>Would you like to view Teams or Players?</p>
                <div className="buttons">
                    <button onClick={() => {
                        console.log("Back button clicked");
                        setStep(1);
                    }}>Back</button>
                    <button onClick={() => handleCategorySelect('teams')}>Teams</button>
                    <button onClick={() => handleCategorySelect('players')}>Players</button>
                </div>
                {/* Conference Standings - Only visible when category is not selected */}
                <h1>Conference Standings</h1>
                {conferences.map(conference => (
                    <ConferenceStandings
                        key={conference}
                        conferenceName={conference}
                        teamsData={data.team[gender]}
                    />
                ))}
            </div>
        )}


{step === 3 && (
        <>
            <h2>{gender === 'mens' ? "Men's" : "Women's"} Basketball</h2>
            <div className="buttons">
                <button onClick={() => {
                    console.log("Back button clicked");
                    setStep(2);
                }}>Back</button>
                <button onClick={() => {
                    console.log("Men's button clicked");
                    handleGenderSelect('mens');
                }}>Men's</button>
                <button onClick={() => {
                    console.log("Women's button clicked");
                    handleGenderSelect('womens');
                }}>Women's</button>
            </div>

            {/* Debugging: Log the current step, gender, and category to check their values */}
            {console.log("Current Step:", step)}
            {console.log("Current Gender:", gender)}
            {console.log("Current Category:", category)}

            

            {/* Team Stats - Visible when "Teams" is selected */}
            {category === 'teams' && (
                <>
                    {console.log("Rendering Team Stats")}
                    <TeamStats data={data.team[gender]} />
                </>
            )}

            {/* Player Stats - Visible when "Players" is selected */}
            {category === 'players' && (
                <>
                    {console.log("Rendering Player Stats")}
                    <PlayerStats data={data.player[gender]} />
                </>
            )}
        </>
    )}
        </div>
    );
}

export default App;
