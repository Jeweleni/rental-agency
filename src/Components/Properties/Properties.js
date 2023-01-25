import image1 from "./section3/image1.png"
import image2 from "./section3/image2.png"
import image3 from "./section3/image3.png"
import image4 from "./section3/image4.png"
import image5 from "./section3/image5.png"
import image6 from "./section3/image6.png"
import "./Properties.css"


const Properties = () => {
    return (
        <div className="properties">
            <h3>List Of Properties</h3>
            <hr/>

            <div className="content">

                <div className="right">
                <div className="image">
                    <img src={image1}/>
                    <span>
                    <h5>2578 Folsom street, san francisco, CA, 94110</h5>
                    <p>Private Room</p>
                    <p>$1200/month</p>
                    <div>
                        
                    </div>
                    </span>
                </div>

                <div className="image">
                    <img src={image2}/>
                    <h5>2578 Folsom street, san francisco, CA, 94110</h5>
                    <p>Private Room</p>
                    <p>$1200/month</p>
                    <div>
                        <span>1</span> <span>2</span> <span>3</span> 
                    </div>
                </div>

                <div className="image">
                    <img src={image3}/>
                    <h5>2578 Folsom street, san francisco, CA, 94110</h5>
                    <p>Private Room</p>
                    <p>$1200/month</p>
                    <div>
                        <span>1</span> <span>2</span> <span>3</span> 
                    </div>
                </div>

                <div className="image">
                    <img src={image4}/>
                    <h5>2578 Folsom street, san francisco, CA, 94110</h5>
                    <p>Private Room</p>
                    <p>$1200/month</p>
                    <div>
                        <span>1</span> <span>2</span> <span>3</span> 
                    </div>
                </div>

                <div className="image">
                    <img src={image5}/>
                    <h5>2578 Folsom street, san francisco, CA, 94110</h5>
                    <p>Private Room</p>
                    <p>$1200/month</p>
                    <div>
                        <span>1</span> <span>2</span> <span>3</span> 
                    </div>
                </div>

                <div className="image">
                    <img src={image6}/>
                    <h5>2578 Folsom street, san francisco, CA, 94110</h5>
                    <p>Private Room</p>
                    <p>$1200/month</p>
                    <div>
                        <span>1</span> <span>2</span> <span>3</span> 
                    </div>
                </div>
            </div>
            </div>
        </div>
      );
}
 
export default Properties;