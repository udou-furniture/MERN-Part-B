import React from 'react'

import PurchaseHistory from '../components/Dashboard/PurchaseHistory'

class AccountDashboard extends React.Component {
    render() {
        return(
            <>
                <div>Account Dashboard</div>
                <PurchaseHistory />
            </>
        )
    }
}

export default AccountDashboard