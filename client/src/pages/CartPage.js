import React from 'react';

import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import Cart from '../components/cart/Cart';

class CartPage extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
					isPaneOpen: false,
					isPaneOpenLeft: false
			};
	}

	componentDidMount() {
			Modal.setAppElement(this.el);
	}

	render() {
			return <div ref={ref => this.el = ref}>
					<button onClick={() => this.setState({ isPaneOpen: true })}>Click me to open right pane!</button>
					<div style={{ marginTop: '32px' }}>
							<button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
									Click me to open left pane with 20% width!
							</button>
					</div>
					<SlidingPane
							className='some-custom-class'
							overlayClassName='some-custom-overlay-class'
							isOpen={ this.state.isPaneOpen }
							title='Your Cart'
							subtitle=""
							width="400px"
							onRequestClose={ () => {
									// triggered on "<" on left top click or on outside click
									this.setState({ isPaneOpen: false });
							} }>
							<Cart />
					</SlidingPane>
					{/* <SlidingPane
							closeIcon={<div>Some div containing custom close icon.</div>}
							isOpen={ this.state.isPaneOpenLeft }
							title='Hey, it is optional pane title.  I can be React component too.'
							from='left'
							width='200px'
							onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
							<div>And I am pane content on left.</div>
					</SlidingPane> */}
			</div>;
	}
}

export default CartPage;