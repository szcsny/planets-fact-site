import './Navbar.css';
import {useEffect, useState} from 'react';

export default function Navbar(props) {
    const [showMenu, toggleShowMenu] = useState(false);
    
    const isMobile = props.width < 600;
    
    // To hide dropdown menu when resizing
    useEffect(() => {
        if(isMobile){
            toggleShowMenu(false);
        }
    }, [props.width]);

    if(!isMobile && !showMenu){
        toggleShowMenu(true);
    }

    let menuClassName;
    if(isMobile){
        menuClassName = showMenu ? 'dropdown-menu' : 'dropdown-menu menu-hidden';
    } else {
        menuClassName = 'dropdown-menu';
    }
    

    const dropdownMenu = (
        <ul className={menuClassName}>
            {props.data.map(planet => {
                const name = planet.name;
                return (
                    <li 
                    key={name}
                    className="nav-list-item"
                    onClick={() => choosePlanet(name)}>
                        <div className='nav-item-wrapper'>
                            {isMobile && 
                                <div className='bullet'
                                    style={{backgroundColor: `var(--${name}-nav)`}}
                                ></div>
                            }

                            <p className='nav-list-planet'>{name}</p>
                        </div>
                        

                        {isMobile && 
                            <img src='../../public/assets/icon-chevron.svg'/>}
                    </li>
                )
                })
            }
        </ul>
    )

    function toggleMenu() {
        toggleShowMenu(prev => !prev);
    }

    function choosePlanet(planet) {
        props.setPlanet(planet);
        toggleMenu();
    }

    const hamClassName = showMenu ? 'hamburger-div ham-clicked' : 'hamburger-div';
    
    return (
        <nav>
            <h1 className='title'>The Planets</h1>
            {isMobile && 
                <div className={hamClassName} onClick={toggleMenu}>
                    <span className='ham1'></span>
                    <span className='ham2'></span>
                    <span className='ham3'></span>
                    <span className='ham4'></span>
                </div>
            }

            {dropdownMenu}
        </nav>
    )
}