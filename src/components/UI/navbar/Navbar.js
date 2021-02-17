import Reat from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


const navbar = () => (
    <nav className='Navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ranking">Ranking</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
)

export default navbar;