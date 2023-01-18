import React from "react";
import vector from ".//section1/vector.png"
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Navbar from "../Navbar/Navbar"
import "./Home.css";



const Home = () => {
    // const[search, setSearch]= useState("")
    const { isLoaded } = useLoadScript({
        googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>
    

    return (

        

            <div className="Home"> 
                <Navbar/>

                
                <section className="main">
                    <h2>The most affortable place to stay in the san franciso bay area</h2>
                    <div >

                    <GoogleMap zoom={5} center={{lat:37, lng:-122}} mapContainerClassName="map"></GoogleMap>;

                        <div className="select">
                        <select id="select1">
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

                        <div className="search">
                        
                            <img src={vector} alt="search"/>

                        <button type="search"></button>
                        </div>
                        </div>
                    
                        
                    </div>
                </section> 
                
            </div>
            
    );
   
}

export default Home;