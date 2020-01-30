import React from 'react'
import axios from 'axios'

import SavedTableRow from './SavedTableRow'

import { getLocalStorageToken } from "../../utils/localStorage";

class SavedDesigns extends React.Component {
    state = {
        savedDesigns: []
    }

    componentDidMount() {
        const token = getLocalStorageToken()
        axios.get("http://localhost:5000/api/orders/my-saved-orders", { headers: {
            Authorisation: `Bearer ${token}`}})
        .then(response => {
            this.setState({savedDesigns: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    mapTableData() {
        return this.state.savedDesigns.map(function(object, i){
           return <SavedTableRow order={object} key={i} />
        })
    }

    render() {
        return(
            <>
                <h1>My Saved Designs</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Item Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.mapTableData() }
                    </tbody>
                </table>
            </>
        )
    }
}

export default SavedDesigns