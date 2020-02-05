import React from 'react'

import PurchaseHistory from '../components/Dashboard/PurchaseHistory'
import SavedDesigns from '../components/Dashboard/SavedDesigns'

class AccountDashboard extends React.Component {
    render() {
        return(
            <div id="account-dashboard">
                <div className="center-element dashboard-header">
                    {/* <h2>Your Account</h2> */}
                </div>
                <PurchaseHistory />
                <SavedDesigns />
            </div>
        )
    }
}

export default AccountDashboard