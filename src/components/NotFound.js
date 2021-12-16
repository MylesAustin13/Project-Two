import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>404 - Page not found!</h1>
      <Link to="/" style={{backgroundColor: 'bisque'}}>Return to Home Page</Link>
    </div>
  )
}