import React from 'react';

const PageNotFound = ({staticContext = {}}) => {
    // @ts-ignore
    staticContext.notFound = true;
    return (
        <h1>Page not found</h1>
    )
}

export default{
    component: PageNotFound
}