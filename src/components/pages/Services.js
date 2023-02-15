import React from "react";
import "../../App.css";

import CardItem from "../CardItem";
import "../../components/pages/Services.css";
function Services() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          {" "}
          <h1>Check out our services!</h1>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Share the most Special day of your life with us"
              label="Wedding catering"
              path="/Weddings"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Buisness and Corporate Events"
              label="Corporate events"
              path="/Corporate"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Catering for Private events and Functions"
              label="Private Functions"
              path="/Functions"
            />
            <CardItem
              src="./images/img-5.jpg"
              text="Exsuiste fineding food with table service"
              label="Fine dining"
              path="/FineDining"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Weekly delivered ready prepared meals"
              label="Meal Prep"
              path="/MealPrep"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Pre-prepared meals to cook and finish at home"
              label="Finish At Home"
              path="/FinishAtHome"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
