import React, { useEffect } from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";
import Aos from "aos";

const Newsletter = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="app__newsletter" data-aos="fade">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
