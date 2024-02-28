import { useState } from 'react';
import './App.css';
import Planet from './containers/Planet';
import Navbar from './containers/Navbar';

function App({data}) {
  const [activePlanet, setActivePlanet] = useState("Mercury");

  const planet = data.filter(item => {
    return item.name === activePlanet;
  })

  return (
    <div className='App'>
      <Navbar 
        data={data}
        setActivePlanet={setActivePlanet}
      />

      <Planet
        key = {planet.name} 
        planetData = {planet[0]}
      />
    </div>
  )
}

export default App
