import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.currentPrice.toFixed(2)}</strong>
      </p>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          add={() => props.addIngredient(control.type)}
          remove={() => props.removeIngredient(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        disabled={!props.purchaseable}
        className={classes.OrderButton}
        onClick={props.ordered}
      >
        {props.isAuth ? "ORDER NOW" : "LOGIN TO ORDER"}
      </button>
    </div>
  );
};

export default BuildControls;
