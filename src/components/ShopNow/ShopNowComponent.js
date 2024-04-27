import React from "react";

import style from "./ShopNow.module.css";

import Shop_1 from "../../resources/Shop_1.png";
import Shop_2 from "../../resources/Shop_2.png";

function ShopNowComponent() {
  return (
    <div class="grid-cols-1 sm:grid md:grid-cols-2 px-28">
      <div class="mx-3 mt-6 relative rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            class="absolute inset-0 w-full object-cover rounded-t-lg"
            src={Shop_1}
            alt="Shop 1"
          />
        </a>
        <div class="p-6 relative z-10">
          <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
          <p class="mb-4 text-base">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class="flex justify-start">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </div>
        </div>
      </div>

      <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img class="rounded-t-lg" src={Shop_2} alt="Shop 2" />
        </a>
      </div>
    </div>
  );
}

export default ShopNowComponent;
