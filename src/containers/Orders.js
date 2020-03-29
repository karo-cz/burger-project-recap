import React, { Component } from "react";

import Order from "../components/Order/Order/Order";
import axios from "../axios-orders";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(response => {
        console.log(response.data);
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }

        this.setState({
          loading: false,
          orders: fetchedOrders
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.length > 0
          ? this.state.orders.map(order => {
              return (
                <Order
                  key={order.id}
                  ingredients={order.ingredients}
                  price={+order.price}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
