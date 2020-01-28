import React from 'react';
import Dropdown from '../components/Dropdown'
import Review from '../components/reviews/ReviewCard'
import  {reviewTest} from '../test-db';
import CardIndex from '../components/reviews/CardIndex'

class Home extends React.Component {
  render() {
    return (
			<>
				<Dropdown />
        
        <CardIndex />
        
			</>	
    );
  }
}

export default Home;