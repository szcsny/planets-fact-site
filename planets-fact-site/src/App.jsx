import { useState } from 'react';
import './App.css';
import Planet from './containers/Planet';

function App({data}) {
  console.log(data);

  const planets = data.map(planet => {
    return (
      <Planet
        key = {planet.name} 
        planetData = {planet}
      />
    )
  })

  return (
    <>
      {planets}
    </>
  )
}

export default App
