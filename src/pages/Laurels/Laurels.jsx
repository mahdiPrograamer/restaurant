import React, { useEffect } from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";
import Aos from "aos";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="awards" data-aos="flip-right" />
      <div className="app__laurels_awards-card_content" data-aos="flip-right">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img" data-aos="zoom-out">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  );
};

export default Laurels;
