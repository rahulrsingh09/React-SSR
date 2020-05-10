import React from 'react';
import {FETCH_USERS} from "../actions";
import {connect} from "react-redux";

class UsersList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers = () => {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        })
    }

    render() {
        return (
            <div>
                Big List of Users
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => {dispatch({type: FETCH_USERS})}
    }
}

const loadData = (store) => {
    return new Promise((resolve) => {
        store.dispatch({type: FETCH_USERS, callback: resolve })
    });
}

export default {
    loadData,
    component: connect(mapStateToProps, mapDispatchToProps)(UsersList)
}