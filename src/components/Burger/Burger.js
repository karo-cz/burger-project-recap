import React from "react";
import classes from "./Burger.module.css";
import Burgeringredient from "./Burgeringredient/Burgeringredient";

const Burger = props => {
  let ingredientsArray = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <Burgeringredient key={key + i} type={key} />;
      });
    })
    .reduce((acc, el) => {
      return acc.concat(el);
    }, []);

  if (ingredientsArray.length === 0) {
    ingredientsArray = <p>Please add ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <Burgeringredient type="bread-top" />
      {ingredientsArray}
      <Burgeringredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
