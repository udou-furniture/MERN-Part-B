import React from 'react'
import axios from 'axios'

import ReviewForm from '../components/reviews/ReviewForm'

class ReviewPage extends React.Component {
    // submit = async (values) => {
    //     try {
    //         let response = await axios.post('http://localhost:5000/api/orders/new-review', { headers: {
    //             Authorisation: `Bearer ${token}`}},
    //         {
    //             review: values.review
    //         })
    //         console.log(response)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    render() {
        return(
            <>
                <h1>Review Form here</h1>
                <ReviewForm onSubmit={this.submit} />
            </>
        )
    }
}

export default ReviewPage