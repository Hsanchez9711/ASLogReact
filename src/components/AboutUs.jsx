import repeatingBG from "../images/aslogrepeatingbg.png";
import presidentHeadshot from "../images/ada-headshot.png";
import operationsHeadshot from "../images/hector-headshot.png";
import managerHeadshot from "../images/andrea-headshot.png";

const AboutUs = () => {
  return (
    <div className="about-us-parent">
      <h1 className="about-us-title" id="about-us-section">
        <b>About Us</b>
      </h1>
      <div className="about-us-body-container">
        <div class="image-container">
          <div class="image-item">
            <img src={presidentHeadshot} alt="Image 1" />
            <p>Ada Sanchez - President</p>
          </div>
          <div class="image-item">
            <img src={operationsHeadshot} alt="Image 2" />
            <p>Hector Sanchez - Operations Director</p>
          </div>
          <div class="image-item">
            <img src={managerHeadshot} alt="Image 3" />
            <p>Andrea Egure - Operations Manager</p>
          </div>
        </div>
        <div className="about-us-text">
          <br />
          <h2>
            A.S. Logistic Corporation was founded in 2006 in El Paso, Texas,
            where our headquarters still reside today. We are family-owned and
            operated and are one of El Paso's major logistic corporations. We
            have since acquired operation locations in Laredo, Texas, and Los
            Angeles, California as we continue to expand. Our goal is a simple
            one; consistently strive to provide unparalleled customer service
            and competitive pricing while never dismissing our motto: "On time
            delivery is always our priority". Despite our emphasis on timely
            delivery, we never compromise on safety or efficiency thanks to our
            highly-skilled driving teams, staff, and cutting-edge technology and
            equipment. So next time you are considering freight delivery
            consider A.S Logistic Corporation as your first choice!
          </h2>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
