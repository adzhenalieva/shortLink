import axios from "../axios-api";

export const FETCH_SUCCESS ='FETCH_SUCCESS';
export const CREATE_LINK_SUCCESS = "CREATE_LINK_SUCCESS";

export const createLinkSuccess = data => ({type: CREATE_LINK_SUCCESS, data});

export const createLink = link => {
    return dispatch => {
        return axios.post('/links', link).then(
            (result) => dispatch(createLinkSuccess(result.data.shortURL))
        )
    };
};