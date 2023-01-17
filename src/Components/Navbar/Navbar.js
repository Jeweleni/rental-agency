import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "./logo.png"


const Navbar = () => {
    return ( 
        <nav>

          
        
            <img src={logo} alt="logo" />
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/Landlord">Landlord</Link>
                    <Link to="/Tenats">Tenants</Link>
                    <Link to="/Contact">Contact Us</Link>
                </div>
         
        </nav>
        

     );
     
}

<hr/>
 
export default Navbar;