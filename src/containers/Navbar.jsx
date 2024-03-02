import './Navbar.css';
import {useState} from 'react';

export default function Navbar(props) {
    const [showMenu, toggleShowMenu] = useState(false);

    const dropdownMenu = (
        <ul className='dropdown-menu'>
            {props.data.map(planet => {
                const name = planet.name;
                return (
                    <li 
                    key={name}
                    className="nav-list-item"
                    onClick={() => choosePlanet(name)}>
                        <div className='bullet'
                            style={{backgroundColor: `var(--${name}-nav)`}}
                        ></div>
                        <p className='nav-list-planet'>{name}</p>
                        <img src='../../public/assets/icon-chevron.svg'/>
                    </li>
                )
                })
            }
        </ul>
    )

    const imgToDisplay = showMenu ? 'icon-hamburger-dim.svg' : 'icon-hamburger.svg';

    function toggleMenu() {
        toggleShowMenu(prev => !prev);
    }

    function choosePlanet(planet) {
        props.setPlanet(planet);
        toggleMenu();
    }
    
    return (
        <nav>
            <h1>The Planets</h1>
            <img onClick={toggleMenu} src={`assets/${imgToDisplay}`}/>

            {showMenu && dropdownMenu}
        </nav>
    )
}