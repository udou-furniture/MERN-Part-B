import React from 'react';
import Dropdown from '../components/Dropdown'
import Configurator from '../components/configurator/Configurator'
 

class Product extends React.Component {
  render() {
    return (
			<>
      <p>ProductView Page</p>
				<Dropdown />
        <Configurator />
			</>	
    );
  }
}

export default Home;