import './Planet.css';
import { useState } from 'react';
import Page from '../components/Page';
import Card from '../components/Card';

export default function Planet(props) {
    const {name, images, overview, structure, geology, radius, rotation, revolution, temperature} = props.planetData;
    
    const [activePage, setActivePage] = useState("Overview");

    let pageContent;
    let pageName;
    let classNames = {
        overview: "page-button",
        structure: "page-button",
        geology: "page-button"
    }
    switch(activePage){
        case "Structure":
            pageContent = structure;
            pageName = "internal";
            classNames = {
                overview: "page-button",
                structure: "page-button page-button-active",
                geology: "page-button"
            }
            break;
        case "Surface":
            pageContent = geology;
            pageName = "geology";
            classNames = {
                overview: "page-button",
                structure: "page-button",
                geology: "page-button page-button-active"
            }
            break;
        default:
            pageContent = overview;
            pageName = "planet";
            classNames = {
                overview: "page-button page-button-active",
                structure: "page-button",
                geology: "page-button"
            }
    }

    return (
        <div className='Planet'>
            <div className='buttons-div'>
                <button className={classNames.overview} onClick={() => setActivePage("Overview")}>Overview</button>
                <button className={classNames.structure} onClick={() => setActivePage("Structure")}>Structure</button>
                <button className={classNames.geology} onClick={() => setActivePage("Surface")}>Surface</button>
            </div>

            <Page name={name} pageName={pageName} page={pageContent} images={images}/>

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