export const getUsers =  (api) => {
    const response = api.get('/users');
    return response;
}


export const getCurrentUser =  (api) => {
    const response = api.get('/current_user');
    return response;
}
