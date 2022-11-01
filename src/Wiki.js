import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Wiki() {
  const location = useLocation();

  window.location.replace(location.state.location.state.details.urls[1].url)

  return null;
}

export default Wiki;