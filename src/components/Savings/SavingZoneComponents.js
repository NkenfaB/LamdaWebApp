import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import style from "./SavingZone.module.css";

import Zone_1 from "../../resources/Zone_1.png";
import Zone_2 from "../../resources/Zone_2.png";
import Zone_3 from "../../resources/Zone_3.png";
import Zone_4 from "../../resources/Zone_4.png";
import Zone_5 from "../../resources/Zone_5.png";

function SavingZoneComponents() {
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
          <img className={`${style.imageStyle}`} src={Zone_1} alt="Zone 1" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Knitted Joggers</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Zone_2} alt="Zone 2" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Full Sleeve</h5>
          </div>
        </div>

        <div>
          <img className={`${style.imageStyle}`} src={Zone_3} alt="Zone 3" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>
        <div>
          <img className={`${style.imageStyle}`} src={Zone_4} alt="Zone 3" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>
        <div>
          <img className={`${style.imageStyle}`} src={Zone_5} alt="Zone 3" />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavingZoneComponents;
