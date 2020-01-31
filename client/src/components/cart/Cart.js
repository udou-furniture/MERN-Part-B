import React from 'react';
import { connect } from "react-redux";
import Item from "./Item";
import CartIcon from './CartIcon';

class Cart extends React.Component {
  



  renderItems() {
    console.log(this.props)
    if (this.props.items.length > 0) {
      return this.props.items.map(item => <Item {...item} />)
    } else 
      return (
        <p>Cart is empty</p>
      )
  }

  render() {
    return (
      <div>
        <h2>Your Cart</h2>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.cart 
  };
};

export default connect(mapStateToProps)(Cart);



// import React, { Component } from 'react';
// import { Icon } from 'antd';
// import './style.css';

// export default class ExampleCss extends Component {
//   constructor(props) {
//     super(props);
//     this.wrapperRef = React.createRef();
//   }

//   handleClick() {
//     const wrapper = this.wrapperRef.current;
//     wrapper.classList.toggle('is-nav-open')
//   }

//   render() {
//     return (
//       <div ref={this.wrapperRef} className="wrapper" >
//         <div className="nav">
//           <Icon className="nav__icon" type="menu-fold" onClick={() => this.handleClick()} />
//           <div className="nav__body">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus est laudantium libero nam omnis optio repellat sit unde voluptatum?
//           </div>
//         </div>
//       </div>
//     );
//   }
// }