import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Character from './Character';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import './MarvelApp.css';

function MarvelApp() {

  const abcSearch = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let randLetter = abcSearch[Math.floor(Math.random() * 26) + 1]

  const [charData, setCharData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(randLetter);

  const url = new URL(
    `http://gateway.marvel.com/v1/public/characters?apikey=605ed486c839d046c084efaf73906147&limit=100&nameStartsWith=${searchQuery}`
  );

  // const urlData = { limit: 100, nameStartsWith: { searchQuery } };

  useEffect(
    () => {
      async function getMarvelData() {
        const response = await fetch(url);
        const data = await response.json();
        setCharData(data.data.results);
      }
      getMarvelData();
    },
    [searchQuery]
  );

  console.log(charData);

  return (
    <div>
      <div className="Header">

      </div>

      <div>
        <TextField
          id="search-bar"
          className="search"
          margin="dense"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          label="Search for a Hero"
          variant="outlined"
          color="warning"
          placeholder="Search..."
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton type="submit" aria-label="search">
                  <SearchIcon style={{ fill: 'slategray' }} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>

      <div className="MarvelDir-cards">
        {charData.map((character) => (
          <div className="MarvelCard" key={character.id}>
            <div className="Marvelcard-title">
              <h1>{character.name}</h1>
            </div>

            <div>
              <Link to={`/Character/${character.id}`} state={{ details: character }}>
                <img
                  className="Marvelcard-image"
                  alt={character.name}
                  src={character.thumbnail.path + '/portrait_incredible.jpg'}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarvelApp;
