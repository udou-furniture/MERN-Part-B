import React from 'react';
import Dropdown from '../components/Dropdown'
import Review from '../components/reviews/ReviewCard'
import CardIndex from '../components/reviews/CardIndex'

class Home extends React.Component {
    render() {
        return (
			<>
				<Dropdown />
                <h1>Customer Reviews</h1>
                <CardIndex />
			</>	
        );
    }
}

export default Home;