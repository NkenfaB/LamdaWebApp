import React from "react";
import Deal_1 from "../../resources/Deal_1.jpg";
import Deal_2 from "../../resources/Deal_2.jpg";

import style from "./Deals.module.css";

function DealsComponent() {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.cardWrapper}`}>
        <div className={`${style.cardStyle}`}>
          <img className={`${style.imgageStyle}`} src={Deal_1} alt="Deal 1" />
        </div>
      </div>

      <div className={`${style.cardWrapper}`}>
        <div className={`${style.cardStyle}`}>
          <img className={`${style.imgageStyle}`} src={Deal_2} alt="Deal 2" />
        </div>
      </div>
    </div>
  );
}

export default DealsComponent;
