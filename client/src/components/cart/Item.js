import React from "react";
import { connect } from "react-redux";


class Item extends React.Component {
	
	handleClick = () => {
    this.props.removeFromCart(this.props.id);
  };

  render() {
		const { type, name } = this.props;
		return (
			<div>
				<h4>{type}</h4>
				<p>{name}</p>
				<button onClick={this.handleClick}>Remove from cart</button>
			</div>
		)
  }
}

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart: (id) => { dispatch({ type: 'REMOVE_FROM_CART', id: id})}
	}
};

export default connect(null, mapDispatchToProps)(Item);