import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Details() {
  const location = useLocation();

  window.location.replace(location.state.location.state.details.urls[0].url)

  return null;
}

export default Details;

