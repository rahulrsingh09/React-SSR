import {SAVE_USERS} from "../actions";


export default (state = [] = [], action) => {
    switch(action.type){
        case SAVE_USERS:
            return action.payload;
        default:
            return state;
    }
};

