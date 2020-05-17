import React from 'react';
import {FETCH_ADMINS} from "../actions";
import {connect} from "react-redux";
import requireAuth from "../components/hoc/requireAuth";

class AdminsList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins = () => {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
        })
    }

    render() {
        return (
            <div>
                Big List of Admins
                <ul>{this.props.admins.length && this.renderAdmins()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        admins: state.admins.adminsList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAdmins: () => {dispatch({type: FETCH_ADMINS})}
    }
}

const loadData = (store) => {
    store.dispatch({type: FETCH_ADMINS})
}

export default {
    loadData,
    component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(AdminsList))
}