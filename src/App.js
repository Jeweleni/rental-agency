import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import MinimumLiving from "./Components/MinimumLiving/MinimumLiving";
import "./App.css";
import Properties from "./Components/Properties/Properties";


function App() {
  return (
    <Router>
      <div className="App">
        
      
        <Home />
       <MinimumLiving/>
       <Properties/>
      </div>
    </Router>
  );
}

export default App;
