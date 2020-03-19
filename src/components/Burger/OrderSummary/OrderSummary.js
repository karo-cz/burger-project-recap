import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(el => {
    return (
      <li key={el}>
        <span style={{ textTransform: "capitalize" }}></span>
        {el}: {props.ingredients[el]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button buttonType="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.continue}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
