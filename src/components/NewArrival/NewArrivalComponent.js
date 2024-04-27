import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import style from "./NewArrival.module.css";

import joggins_1 from "../../resources/joggins_1.png";
import joggins_2 from "../../resources/joggins_2.png";
import joggins_3 from "../../resources/joggins_3.png";
import joggins_4 from "../../resources/joggins_4.png";

function NewArrivalComponent() {
  return (
    <div>
      <div className={`${style.titleGap}`}>
        <h1 className={`${style.titleContainer}`}>
          <span className={`${style.titlePadding}`}></span>
          <span className={`${style.titleText}`}>New Arrival</span>
        </h1>
      </div>
      <div className={`${style.container} relative`}>
        <div className="absolute inset-y-0 left-28 bottom-20 flex items-center z-10">
          <FontAwesomeIcon icon={faChevronLeft} className="text-[#3c4242]" />
        </div>
        <div>
          <img
            className={`${style.imageStyle}`}
            src={joggins_1}
            alt="Joggins 1"
          />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Knitted Joggers</h5>
          </div>
        </div>

        <div>
          <img
            className={`${style.imageStyle}`}
            src={joggins_2}
            alt="Joggins 2"
          />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Full Sleeve</h5>
          </div>
        </div>

        <div>
          <img
            className={`${style.imageStyle}`}
            src={joggins_3}
            alt="Joggins 3"
          />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Active T-Shirts</h5>
          </div>
        </div>

        <div>
          <img
            className={`${style.imageStyle}`}
            src={joggins_4}
            alt="Joggins 4"
          />
          <div className={`${style.titleWrapper}`}>
            <h5 className={`${style.titleStyle}`}>Urban Shirts</h5>
          </div>
        </div>

        <div className="absolute inset-y-0 right-28 bottom-20 flex items-center z-10">
          <FontAwesomeIcon icon={faChevronRight} className="text-[#3c4242]" />
        </div>
      </div>
    </div>
  );
}

export default NewArrivalComponent;
