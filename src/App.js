import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarvelApp from './MarvelApp';
import Character from './Character';
import Details from './Details';
import Wiki from './Wiki';
import Creators from './Creators';



function App() {

  // useEffect(() => {
  //   async function getSeries() {
  //     const response = await fetch('http://gateway.marvel.com/v1/public/characters/1011288/series?apikey=605ed486c839d046c084efaf73906147')
  //     const data = await response.json();
  //     console.log('Series data ', data)
  //   }
  // }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MarvelApp />} />
          <Route path="/Character/:id" element={<Character />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Wiki" element={<Wiki />} />
          <Route path="/Creators/:id" element={<Creators />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
