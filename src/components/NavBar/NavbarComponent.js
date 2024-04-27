import React from "react";
import style from "./Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
  return (
    <div className={style.wrapper}>
      <nav className={`${style.navWrapper} shadow-dark-mild `}>
        <div className={`${style.navContent}`}>
          <div>
            <a className={`${style.navLogo}`} href="#"></a>
          </div>

          {/* <!-- Hamburger button for mobile view --> */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* <!-- Collapsible navbar container --> */}
          <div className="mt-2 hidden flex-grow justify-evenly  items-center lg:mt-0 lg:!flex lg:basis-auto">
            {/* <!-- Left links --> */}
            <ul
              className="list-style-none  flex flex-col ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              {/* <!-- Home link --> */}
              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 text-2xl space-x-4"
                data-twe-nav-item-ref
              >
                <a className={`${style.navItem} font-bold`} href="#">
                  Shop
                </a>
                <a className={`${style.navItem}`} href="#">
                  Men
                </a>
                <a className={`${style.navItem}`} href="#">
                  Women
                </a>
                <a className={`${style.navItem}`} href="#">
                  Combos
                </a>
                <a className={`${style.navItem}`} href="#">
                  Joggers
                </a>
              </li>
            </ul>

            <form className={`${style.formWrapper}`}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`${style.formIcon}`}
              />
              <input
                type="search"
                className={`${style.formInput}`}
                placeholder="Search"
              />
            </form>

            <div className={`${style.iconWrapper}`}>
              <button type="button" className={`${style.iconStyle}`}>
                <FontAwesomeIcon icon={farHeart} style={{ color: "#807d7e" }} />
              </button>
              <button type="button" className={`${style.iconStyle}`}>
                <FontAwesomeIcon icon={farUser} style={{ color: "#807d7e" }} />
              </button>
              <button type="button" className={`${style.iconStyle}`}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#807d7e" }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
