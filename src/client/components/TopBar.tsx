import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

const TopBar = ({auth}) => {
    const authValue: boolean| null = auth;
    const authButton =  authValue ?
        (<a href = '/api/logout'> Logout </a> ) :
        (<a href = '/api/auth/google'> Login </a>);

    return(
        <div>
            <Link to="/">React SSR</Link>
            <div>
                <Link to='/users'>Users</Link>
                <Link to='/admins'>Admins</Link>
                {authButton}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(TopBar);