import React, { useEffect } from "react";

import "./MenuItem.css";
import Aos from "aos";

const MenuItem = ({ title, price, tags }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="app__menuitem" data-aos="fade-up">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
