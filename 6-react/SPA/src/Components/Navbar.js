import {Link} from 'react-router-dom'

export default function Navbar(){
    return (  
        <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
            <div class="container-xl">
                <Link class="navbar-brand" to="/">SPA Example</Link>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbarsExample07">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" >Home</Link>                         
                        </li>
                        <li class="nav-item">
                            <Link to="/about" >About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contactus" >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}