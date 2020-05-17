import React from 'react';
import Home from './containers/Home';
import App from './App';
import UsersList from './containers/UsersList';
import AdminsList from './containers/AdminsList';
import PageNotFound from "./components/PageNotFound";

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: "/",
                exact: true,
            },
            {
                ...AdminsList,
                path: "/admins",
                exact: true,
            },
            {
                ...UsersList,
                path: "/users"
            },
            {
                ...PageNotFound
            }
        ]
    }
]

