import React from 'react'

import PurchaseHistory from '../components/Dashboard/PurchaseHistory'
import SavedDesigns from '../components/Dashboard/SavedDesigns'

class AccountDashboard extends React.Component {
    render() {
        return(
            <>
                <div>Account Dashboard</div>
                <PurchaseHistory />
                <SavedDesigns />
            </>
        )
    }
}

export default AccountDashboard