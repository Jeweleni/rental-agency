import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const AnimatedRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element ={<Home/>}/>
        </Routes>
     );
}
 
export default AnimatedRoutes;