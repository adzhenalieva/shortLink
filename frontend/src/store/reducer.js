import {FETCH_SUCCESS} from "./action";

const initialState = {
    link: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SUCCESS:
            return {...state, link: action.data};
        default:
            return state;
    }
};

export default reducer;