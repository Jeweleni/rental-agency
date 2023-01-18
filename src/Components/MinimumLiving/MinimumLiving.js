import living from "./section2/living.png"

import "./MinimumLiving.css"
import Vector from "./section2/Vector.svg"
import Vector1 from "./section2/Vector1.svg"
import Vector2 from "./section2/Vector2.svg"
import Vector3 from "./section2/Vector3.svg"
import Vector4 from "./section2/Vector4.svg"
import Vector5 from "./section2/Vector5.svg"
const MinimunLiving = () => {
    return (  

      
        <div className="living">
            
            <h3>Minimum living cost takes care of everything</h3>
            <hr/>
            
            <div className="content">
            <div className="image">
                <img src={living} alt="living"/>

            </div>


            <div className="right">
                {/* the icons */}

                <div className="icons">
                    <span>
                        <img src={Vector} alt="icon"/>
                    </span>
                    <p>Pay as Little <br/> as possible!</p>
                </div>
                <div className="icons">
                    <span>
                        <img src={Vector1} alt="icon"/>
                    </span>
                    <p>Enjoy wisdom <br/> of community!</p>
                </div>
                <div className="icons">
                    <span>
                        <img src={Vector2} alt="icon"/>
                    </span>
                    <p>Let's somebody else <br/> take care of Landlord!</p>
                </div>
                <div className="icons">
                    <span>
                        <img src={Vector3} alt="icon"/>
                    </span>
                    <p>Enjoy peaceful <br/>Environment!</p>
                </div>
                <div className="icons">
                    <span>
                        <img src={Vector4} alt="icon"/>
                    </span>
                    <p>Stay Safe! <br/>Save Money!</p>
                </div>
                <div className="icons">
                    <span>
                        <img src={Vector5} alt="icon"/>
                    </span>
                    <p>Pay for what <br/>you use !</p>
                </div>
            </div>
        </div>

    </div>
       
    );
}
 
export default MinimunLiving;