import {FETCH_ADMINS_ERROR, SAVE_ADMINS} from "../actions";


export default (state = {}, action) => {
    switch(action.type){
        case SAVE_ADMINS:
            return {
                ...state,
                adminsList: action.adminsList,
                errorObj: null
            }
        case FETCH_ADMINS_ERROR:
            return{
             ...state,
             errorObj: action.errorObj
            }
        default:
            return state;
    }
};
