import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import map from "../Images/map.png"
import logo from "../Images/logo.png"

const Home = () => {
    const[search, setSearch]= useState("")
    
    return (
            <div className="Home"> 
                <nav>
                    <img className="logo" src={logo} alt="logo" />
                        <ul className="nav-links">
                            <li>Home</li>
                            <li>Landlord</li>
                            <li>Tenants</li>
                            <li>Contact Us</li>
                        </ul>
                </nav>


                <section className="main">
                    <h2>The most affortable place to stay in the san franciso bay area</h2>
                    <div >
                        <img className="map" src={map} alt="map"/>

                        <div className="select">
                        <select>
                            <option>All Types</option>
                            <option>Apartment</option>
                            <option>House</option>
                            <option>Condo</option>
                            <option>Studio</option>
                        </select>
                        
                        <select>
                            <option>Neighborhood</option>
                            <option>Bayview</option>
                            <option>North Beach</option>
                            <option>Marina District</option>
                            <option>Civic Center</option>
                            <option>Chinatown</option>
                        </select>

                        </div>
                        
                        <div className="search">
                            <input type="search" className="searchbar"
                            onChange={e=>setSearch}/>
                            
                        </div>
                    </div>
                </section>
                
            </div>
            
        
    );
}

export default Home;