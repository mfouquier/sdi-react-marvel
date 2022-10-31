import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import './Character.css';

function Character() {
  const location = useLocation();
  const [comics, setComics] = useState([]);
  const [charId, setCharId] = useState(location.state.details.id);

  // console.log('Comics ', location);

  console.log('Char ID ', charId);

  const url = `http://gateway.marvel.com/v1/public/characters/${charId}/comics?apikey=605ed486c839d046c084efaf73906147`;

  useEffect(
    () => {
      async function getComics() {
        const response = await fetch(url);
        const data = await response.json();
        setComics(data.data.results);
        console.log(comics);
      }
      getComics();
    },
    []
  );

  return (
    <div className="Character">


      <>
        <div className="Character-header">
          <h1 className="Character-title" key={location.state.details.id}>{location.state.details.name}</h1>

          <Link to="/">
            <button className="Character-button">Home</button>
          </Link>
        </div>
        <div className="Character-card">
          <img
            className='Character-img'
            alt={location.state.details.name}
            src={location.state.details.thumbnail.path + '/portrait_incredible.jpg'}
          />
          <p className="Character-desc">{location.state.details.description}</p>
        </div>

        <h2 className='comics-header'>Comics</h2>

        <div className='comics'>{comics.map((c) => (

          <div className='comics-main'>
            <h1 key={c.id} className='comics-title'>{c.title}</h1>
            <img alt={c.title} src={c.thumbnail.path + '/portrait_incredible.jpg'} className='comics-image' />

          </div>
        ))}</div>
      </>


    </div>
  );
}

export default Character;
