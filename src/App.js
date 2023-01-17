import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import MinimunLiving from "./Components/MinimumLiving/MinimunLiving";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        
      
        <Home />
        {/* <MinimunLiving /> */}
      </div>
    </Router>
  );
}

export default App;
