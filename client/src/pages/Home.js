import React from 'react';
import {Link} from 'react-router-dom'

import {logout, isLoggedIn} from '../utils/auth'
import Dropdown from '../components/Dropdown'
 

class Home extends React.Component {
    

    render() {
        return (
            <>
                <Dropdown />

                {this.state.isLoggedIn ? 
                    <button onClick={() => this.handleLogout()}>Click here to log out</button>
                    : <Link to="/registration">Register</Link>
                }
            </>	
        );
    }
}

export default Home;