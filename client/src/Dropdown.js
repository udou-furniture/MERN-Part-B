import React from 'react';
import './Dropdown.css';


class Dropdown extends React.Component {
	container = React.createRef();
	state = {
		open: false,
	};

	componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
	};
	
	handleClickOutside = event => {
		if (this.container.current && !this.container.current.contains(event.target)) {
			this.setState({
				open: false,
			});
		}
	};


render() {
	return (
		<div className="container" ref={this.container}>
			<button type="button" class="button" onClick={this.handleButtonClick}>
				<span>👇</span>
			</button>
			{this.state.open && (
				<div class="dropdown">
					<ul>
						<li>Option 1</li>
						<li>Option 2</li>
						<li>Option 3</li>
						<li>Option 4</li>
					</ul>
				</div>
			)}
		</div>
		);
	}
}

export default Dropdown;