import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import style from "./CardsMen.module.css";

import Men_1 from "../../resources/Men_1.png";
import Men_2 from "../../resources/Men_2.png";
import Men_3 from "../../resources/Men_3.png";
import Men_4 from "../../resources/Men_4.png";
import Men_5 from "../../resources/Men_5.png";
import Men_6 from "../../resources/Men_6.png";
import Men_7 from "../../resources/Men_7.png";
import Men_8 from "../../resources/Men_8.png";

function CardsMenComponent() {
  return (
    <div>
      <div className={`${style.titleGap}`}>
        <h1 className={`${style.titleContainer}`}>
          <span className={`${style.titlePadding}`}></span>
          <span className={`${style.titleText}`}>Categories For Men</span>
        </h1>
      </div>
      <div className={`${style.container} relative`}>
        <div>
          <img className={`${style.imageStyle}`} src={Men_1} alt="Men 1" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Knitted Joggers</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Men_2} alt="Men_1 2" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Full Sleeve</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Men_3} alt="Men 3" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Men_4} alt="Men 4" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>
        <div>
          <img className={`${style.imageStyle}`} src={Men_5} alt="Men 5" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Knitted Joggers</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Men_6} alt="Men 6" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Full Sleeve</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Men_7} alt="Men 7" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Men_8} alt="Men 8" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsMenComponent;
