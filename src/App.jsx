import { useEffect, useState } from 'react';
import './App.css';
import Planet from './containers/Planet';
import Navbar from './containers/Navbar';

function App({data}) {
  const [activePlanet, setActivePlanet] = useState("Mercury");
  const [aspectRatio, setAspectRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setAspectRatio(window.innerWidth / window.innerHeight);
    })

    return () => window.removeEventListener("resize", () => {
      setAspectRatio(window.innerWidth / window.innerHeight);
    })
  }, [])

  const planet = data.filter(item => {
    return item.name === activePlanet;
  })

  function setPlanet(name) {
    document.getElementById('root').style.setProperty('--activePlanet', `var(--${name})`);
    setActivePlanet(name);
  }

  return (
    <div className='App'>
      <Navbar 
        data={data}
        setPlanet={setPlanet}
        aspectRatio={aspectRatio}
      />

      <Planet
        key = {planet.name} 
        planetData = {planet[0]}
      />
    </div>
  )
}

export default App
