import {SAVE_CURRENT_USER} from "../actions";


export default (state = null , action) => {
    switch(action.type){
        case SAVE_CURRENT_USER:
            return action.payload || false;
        default:
            return state;
    }
};

