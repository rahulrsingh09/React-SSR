import React from 'react';
import Home from './containers/Home';
import App from './App';
import UsersList from './containers/UsersList';

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
                ...UsersList,
                path: "/users"
            }
        ]
    }
]

