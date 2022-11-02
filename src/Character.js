import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import './Character.css';


const linkStyle = {
  margin: "1rem, 1rem",
  textDecoration: "none",
  color: 'blue',
};

function Character() {
  const location = useLocation();
  const [comics, setComics] = useState([]);
  const [charId, setCharId] = useState(location.state.details.id);

  const url = `http://gateway.marvel.com/v1/public/characters/${charId}/comics?apikey=605ed486c839d046c084efaf73906147`;

  useEffect(
    () => {
      async function getComics() {
        const response = await fetch(url);
        const data = await response.json();
        setComics(data.data.results);
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
          <p className="Character-desc">{location.state.details.description}<br />

            <Link to="/Details" state={{ location: location }} style={linkStyle}>Get more details on Marvel.com</Link><br />
            <Link to="/Wiki" state={{ location: location }} style={linkStyle}>Check out the Marvel.com Wiki for this character!</Link>

          </p>

        </div>

        <h2 className='comics-header'>Comics</h2>

        <div className='comics'>{comics.map((c) => (

          < div className='comics-main' >
            {console.log(c.description)}
            <h1 key={c.id} className='comics-title'>{c.title}</h1>
            <div className='flip-content'>
              <Link to={`/Creators/${c.id}`} state={{ creators: c.creators }}>
                <img alt={c.title} src={c.thumbnail.path + '/portrait_incredible.jpg'} className='comics-image card-front' />
              </Link>
            </div>
            <div className='flip-back'>
              <p className='back-text'>{c.description}</p>
            </div>
          </div>
        ))}</div>
      </>

    </div >
  );
}

export default Character;
