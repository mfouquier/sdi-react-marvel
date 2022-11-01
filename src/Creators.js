import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

function Creators() {
  const location = useLocation();

  console.log(location)
  return (
    <div>
      <h1>The Creators!</h1>
    </div>
  )
}

export default Creators;