import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SupClass extends Component {
  render() {
    const { name, model, price } = this.props;
    return (
      <div>
        <p>Name : {name}</p>
        <p>Model : {model}</p>
        <p>Price : {price}$</p>
      </div>
    );
  }
}
SupClass.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
