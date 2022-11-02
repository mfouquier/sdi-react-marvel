import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import './Character.css'

const CreatorCard = styled.div`
  
`

const NameText = styled.p`
  text-align: center;
  font-family: 'ccbiffbamboom';
  color: #EEB634;
  font-size: 1.5rem;
  text-shadow: 1px 1px red;
  text-align: center;
`
const HeaderText = styled.h1`
  margin-left: 38rem;
  font-family: 'ccbiffbamboom';
  color: #EEB634;
  font-size: 3rem;
  text-shadow: 2px 2px red;
  text-align: center;
`
const CreatorGrid = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const HomeButton = styled.button`
  background-color: #EEB634;
  color: #231F1B;
  margin-top: 3rem;
  margin-right: 5rem;
  font-size: 25px;
  font-weight: bold;
  border-radius: 30px;
  box-sizing: border-box;
  height: 3rem;
  width: 9rem;
  align-self: flex-end;
  cursor: pointer;
`

function Creators() {
  const location = useLocation();
  const description = location.state
  const creators = location.state.creators.items;
  const [creator, setCreator] = useState([])

  console.log(description)
  useEffect(() => {
    async function getCreators(arr) {
      const creatorArray = []

      for (let c of creators) {
        let url = c.resourceURI + '?apikey=605ed486c839d046c084efaf73906147'
        const response = await fetch(url)
        const data = await response.json()
        creatorArray.push(data.data.results[0])
      }
      setCreator(creatorArray)
    }
    getCreators(creators);
  }, [location])

  return (
    <div className='Character'>
      <div className='Character-header'>
        <HeaderText><h1>The Creators!</h1></HeaderText>
        <Link to="/">
          <HomeButton>Home</HomeButton>
        </Link>
      </div>



      <CreatorGrid>

        {creator.map((c, index) => (
          <>
            <CreatorCard key={c.id}>
              <img
                className='Creator-img'
                alt={c.name}
                src={c.thumbnail.path + '/portrait_incredible.jpg'}
              />
              <NameText>
                <p>{c.fullName}</p>
              </NameText>
            </CreatorCard>

          </>
        ))}

      </CreatorGrid>
    </div>
  )
}

export default Creators;