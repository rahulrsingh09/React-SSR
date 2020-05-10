import React from 'react';
import Home from './components/Home';
import UsersList from './components/UsersList';

export default [
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

