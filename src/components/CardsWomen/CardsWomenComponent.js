import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import style from "./CardsWomen.module.css";

import Women_1 from "../../resources/Women_1.png";
import Women_2 from "../../resources/Women_2.png";
import Women_3 from "../../resources/Women_3.png";
import Women_4 from "../../resources/Women_4.png";

function CardsWomenComponent() {
  return (
    <div>
      <div className={`${style.titleGap}`}>
        <h1 className={`${style.titleContainer}`}>
          <span className={`${style.titlePadding}`}></span>
          <span className={`${style.titleText}`}>Big Saving Zone</span>
        </h1>
      </div>
      <div className={`${style.container} relative`}>
        <div>
          <img className={`${style.imageStyle}`} src={Women_1} alt="Women 1" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Knitted Joggers</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Women_2} alt="Women 2" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Full Sleeve</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Women_3} alt="Women 3" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>
        <div>
          <img className={`${style.imageStyle}`} src={Women_4} alt="Women 4" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsWomenComponent;
