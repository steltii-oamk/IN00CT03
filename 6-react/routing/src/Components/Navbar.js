import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav id="navbar">
            <h1>Homepage demo</h1>
            <div id="nav_links">
                <Link to="/" >Home</Link>
                <Link to="/About" >About</Link>
            </div>
        </nav>
    );
}

export default Navbar;