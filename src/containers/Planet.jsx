import './Planet.css';
import { useState } from 'react';
import Page from '../components/Page';
import Card from '../components/Card';

export default function Planet(props) {
    const {name, images, overview, structure, geology, radius, rotation, revolution, temperature} = props.planetData;
    
    const [activePage, setActivePage] = useState("Overview");

    let pageContent;
    let pageName;
    
    switch(activePage){
        case "Structure":
            pageContent = structure;
            pageName = "internal";
            break;
        case "Surface":
            pageContent = geology;
            pageName = "geology";
            break;
        default:
            pageContent = overview;
            pageName = "planet";
    }

    return (
        <div className='Planet'>

            <Page 
                name={name}
                pageName={pageName}
                page={pageContent}
                images={images}
                activePage={activePage}
                setActivePage={setActivePage}
                aspectRatio={props.aspectRatio}
            />

            <ul className='card-list'>
                <li className='card-list-item'>
                    <Card category='Rotation time' value={rotation} />
                </li>
                <li className='card-list-item'>
                    <Card category='Revolution time' value={revolution} />
                </li>
                <li className='card-list-item'>
                    <Card category='Radius' value={radius} />
                </li>
                <li className='card-list-item'>
                    <Card category='Average temp.' value={temperature} />
                </li>
            </ul>
        </div>
    )
}