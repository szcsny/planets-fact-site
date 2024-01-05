import './Navbar.css';

export default function Navbar(props) {
    return (
        <nav>
            <h1>The Planets</h1>
            <div>hamburger icon</div>

            <ul>
                <li>
                    <button><img /> MERCURY</button>
                </li>
                <li>
                    <button><img /> VENUS</button>
                </li>
                <li>
                    <button><img /> EARTH</button>
                </li>
                <li>
                    <button><img /> MARS</button>
                </li>
                <li>
                    <button><img /> JUPITER</button>
                </li>
                <li>
                    <button><img /> SATURN</button>
                </li>
                <li>
                    <button><img /> URANUS</button>
                </li>
                <li>
                    <button><img /> NEPTUNE</button>
                </li>
            </ul>
        </nav>
    )
}