import React from "react";
import { connect } from "react-redux";


class Item extends React.Component {
	
	handleClick = () => {
    this.props.removeFromCart(this.props);
	};
	
	

  render() {
		const { type, name } = this.props;
		return (
			<div>
				<h4>{type}</h4>
				<p>{name}</p>
				<button onClick={this.handleClick}>Remove from cart</button>
				{console.log('hello',this.props)}
			</div>
		)
  }
}





const mapDispatchToProps = dispatch => {
	return {
		removeFromCart: (i) => { dispatch({ type: 'REMOVE_FROM_CART', removeItem: i})}
	}
};

export default connect(null, mapDispatchToProps)(Item);