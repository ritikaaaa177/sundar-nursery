import React from "react";
import indoor from "./images/indoor.avif";
import orm from "./images/orm.avif";
import exotic from "./images/exotic.avif";

const Services = () => {
  return (
    <>
      <div className="section-1"></div>

      <h3 className="head1 font-custom">SERVICES</h3>
      <h1 className="head2 font-custom">
        Transforming Gardens into Dreams, our Array of Exquisite Services for
        Blossoming Environments.
      </h1>

      <section class="section" id="section--1">
        <div class="features">
          <img
            src={indoor}
            // data-src="img/digital.jpg"
            alt="Computer"
            class="features__img lazy-img"
          />
          <div class="features__feature">
            <div class="features__icon"></div>
            <h5 class="features__header font-info text-orange-500 font-bold">
              Indoor Plants
            </h5>
            <p className="font-custom text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>

          <div class="features__feature">
            <div class="features__icon"></div>
            <h5 class="features__header font-info text-orange-500 font-bold">
              Ornamental Plants
            </h5>
            <p className="font-custom text-black">
              Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
              inventore ab? Nulla incidunt eius numquam sequi iste pariatur
              quibusdam!
            </p>
          </div>
          <img
            src={orm}
            // data-src="img/grow.jpg"
            alt="Plant"
            class="features__img lazy-img"
          />

          <img
            src={exotic}
            // data-src="img/card.jpg"
            alt="Credit card"
            class="features__img lazy-img"
          />
          <div class="features__feature">
            <div class="features__icon"></div>
            <h5 class="features__header font-info text-orange-500 font-bold">
              Exotic Plants
            </h5>
            <p className="font-custom text-black">
              Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
              eveniet consequatur odit quam quos possimus assumenda dicta fuga
              inventore ab.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
