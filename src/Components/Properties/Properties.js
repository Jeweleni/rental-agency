import image1 from "./section3/image1.png"
import image2 from "./section3/image2.png"
import image3 from "./section3/image3.png"
import image4 from "./section3/image4.png"
import image5 from "./section3/image5.png"
import image6 from "./section3/image6.png"
import "./Properties.css"
import PropertyCard from "./PropertyCard"

const Properties = () => {
    return (
        <div className="properties">
            <section>
                <h3>List of Properties</h3>
                <button>View All Properties</button>
            </section>
            <hr />
     
    <div class="top">
      <PropertyCard imgUrl={image1}/>
      <PropertyCard imgUrl={image2} />
      <PropertyCard imgUrl={image3} />
      <PropertyCard imgUrl={image4} />
      <PropertyCard imgUrl={image5} />
      <PropertyCard imgUrl={image6} />
    </div>
  

  <div class="button">
    <button class="first">First</button>
    <button class="num">1</button>
    <button class="active">2</button>
    <button class="num">3</button>
    <button class="next">Next</button>
            
        </div>
        </div>
      );
}
 
export default Properties;