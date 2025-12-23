import './App.css'
import { Link } from 'react-router-dom'

function NavBar() {

    return (

    <nav className="navbar">
        <ul>
            <div className="logo"><li><Link to="/">maple</Link></li></div>
            <li><Link to="/solutions">solutions</Link></li>
            <li><Link to="/questions">questions</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/notes">notes</Link></li>
        </ul>
    </nav>

    );

}

export default NavBar