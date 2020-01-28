import React from 'react'
import {Field, reduxForm} from 'redux-form'

class ReviewForm extends React.Component {
    render() {
        const {handleSubmit} = this.props

        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='review'>Please provide your review response below</label>
                    <Field name='review' component='input' type='text' />
                </div>
                <button type="submit" label='submit'>Submit</button>
            </form>
        )
    }
}

ReviewForm = reduxForm({ form: 'review' })(ReviewForm);
export default ReviewForm;