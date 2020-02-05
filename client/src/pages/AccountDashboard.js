import React from 'react'

import PurchaseHistory from '../components/Dashboard/PurchaseHistory'
import SavedDesigns from '../components/Dashboard/SavedDesigns'

class AccountDashboard extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h3>Account Dashboard</h3>
                </div>
                <PurchaseHistory />
                <SavedDesigns />
            </div>
        )
    }
}

export default AccountDashboard