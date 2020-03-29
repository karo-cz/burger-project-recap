import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./OrderCheckout.module.css";

const OrderCheckout = props => {
  return (
    <div className={classes.OrderCheckout}>
      <h1>Great burger!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancel} buttonType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinue} buttonType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default OrderCheckout;
