import shower from "./section3/shower.svg"
import bed from "./section3/bed.svg"
import size from "./section3/size.svg"

const PropertyCard = ({apptImg}) => {
    
    return ( 
        <div className="property-card">
            <div class="image">
                <img src={apptImg}  alt="" />
            </div>
            <h3>2578 Folsom street, san francisco, CA, 94110</h3>
            <div class="info">
                <p>Private Room</p>
                <p>$1200/month</p>
            </div>
            <div class="icons">
            <span>
                <img src={bed} alt="" />
                <p>4</p>
            </span>
            <span>
                <img src={shower} alt="" />
                <p>2</p>
            </span>
            <span>
                <img src={size} alt="" />
                <p>2</p>
            </span>
    </div>
        </div>
     );
}
 
export default PropertyCard;