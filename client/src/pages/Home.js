import React from 'react';
import Dropdown from '../components/Dropdown'
import Review from '../components/reviews/ReviewCard'
import CardIndex from '../components/reviews/CardIndex'
import ProductCardsIndex from '../components/productCardsIndex/productCardsIndex'

class Home extends React.Component {
    render() {
        return (
			<>
				<Dropdown />
                <h1>Customer Reviews</h1>
                <CardIndex />
                <ProductCardsIndex />
			</>	
        );
    }
}

export default Home;