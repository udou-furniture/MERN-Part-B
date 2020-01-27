import React from "react";
import { Link } from "react-router-dom";
import productsList from '../productsList';

class Product extends React.Component {
  render() {
    const { id, type, name } = this.props;
    return (
        <div>
					<h2>{type}</h2>
					<h4>{name}</h4>
        </div>
    );
  }
}

export default Product;