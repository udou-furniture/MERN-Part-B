import React from "react";
import { connect } from "react-redux";


class Item extends React.Component {


  render() {
			return (
				<div>
					<h4>{this.props.product.type}</h4>
					<p>{this.props.product.name}</p>
					<button>Remove from cart</button>
				</div>
			)
  }
}


export default connect(null, null)(Item);