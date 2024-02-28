import './Planet.css';
import Navbar from '../containers/Navbar';
import Page from '../components/Page';

export default function Planet(props) {
    const {name, images, overview, structure, geology, radius, rotation, revolution, temperature} = props.planetData;
    
    return (
        <div className='Planet'>
            <div>
                <button>Overview</button>
                <button>Structure</button>
                <button>Surface</button>
            </div>

            <Page name={name} imgName="planet" page={overview} images={images}/>
            <Page name={name} imgName="internal" page={structure} images={images}/>
            <Page name={name} imgName="planet" page={geology} images={images}/>

            <ul>
                <li>
                    <p>Rotation time</p>
                    <h2>{rotation}</h2>
                </li>
                <li>
                    <p>Revolution time</p>
                    <h2>{revolution}</h2>
                </li>
                <li>
                    <p>Radius</p>
                    <h2>{radius}</h2>
                </li>
                <li>
                    <p>Average temp.</p>
                    <h2>{temperature}</h2>
                </li>
            </ul>
        </div>
    )
}