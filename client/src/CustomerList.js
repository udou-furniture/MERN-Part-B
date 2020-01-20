import React from 'react';
import axios from 'axios';

class CustomerList extends React.Component {
  state = {
    customers: []
  };
	
	componentDidMount(){
		axios.get('http://localhost:5000/customer')
			//The .then method will only fire once the promise has been returned	
			.then(res => {
				this.setState({
					customers: res.data
				})
			})
	}
  
  render() {
		const {customers} = this.state;
		console.log(customers);
    return (
      <div>
        <h3>All customers:</h3>
        {customers ? customers.map((customer, index) => {
          return (
            <div key={index}>
							<ul>
              	<li>{customer.username}</li>
							</ul>
            </div>
          )
        }) : null}
      </div>
    )
  };
}

export default CustomerList;