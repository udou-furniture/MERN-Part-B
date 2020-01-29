import React from 'react'
import axios from 'axios'

import PurchaseTableRow from './PurchaseTableRow'

import {getLocalStorageToken} from '../../utils/localStorage'

class PurchaseHistory extends React.Component {
    state = {
        purchases: []
    }
    
    componentDidMount() {
        const token = getLocalStorageToken()
        // query hrere when purchased is true
        axios.get("http://localhost:5000/api/orders/my-orders", { headers: {
            Authorisation: `Bearer ${token}`}})
        .then(response => {
            this.setState({purchases: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    mapTableData() {
        return this.state.purchases.map(function(object, i){
           return <PurchaseTableRow order={object} key={i} />
        })
    }

    render() {
        return(
            <>
                <h1>Previously Purchased</h1>
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

export default PurchaseHistory