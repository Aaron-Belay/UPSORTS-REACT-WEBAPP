import React, { useState, useEffect } from 'react';
import TeamStats from './components/TeamStats';
import PlayerStats from './components/PlayerStats';
import Header from './components/Header';
import data from './data/usportsData.json';
import './App.css';

function App() {
  // Initialize state to manage the selected gender ('mens' or 'womens')
  const [gender, setGender] = useState('mens');

  return (
      // Container div for the entire application
      <div className="App">
          {/* Render the Header component */}
          <Header />
          
          {/* Container div for the gender selection buttons */}
          <div className="buttons">
              {/* Button to set the gender state to 'mens' */}
              <button onClick={() => setGender('mens')}>Men's</button>
              
              {/* Button to set the gender state to 'womens' */}
              <button onClick={() => setGender('womens')}>Women's</button>
          </div>
          
          {/* Render the TeamStats component, passing the relevant data based on the selected gender */}
          <TeamStats data={data.team[gender]} />
          
          {/* Render the PlayerStats component, passing the relevant data based on the selected gender */}
          <PlayerStats data={data.player[gender]} />
      </div>
  );
}

// Export the App component for use in other parts of the application
export default App;
