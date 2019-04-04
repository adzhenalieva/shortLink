import axios from "../axios-api";

export const FETCH_SUCCESS ='FETCH_SUCCESS';
export const CREATE_LINK_SUCCESS = "CREATE_LINK_SUCCESS";

export const fetchSuccess = data => {
    return {type: FETCH_SUCCESS, data};
};
export const createLinkSuccess = data => ({type: CREATE_LINK_SUCCESS, data});

export const openShortLink = (shortUrl) => {
    return dispatch => {
        return axios.get('/links/'+shortUrl).then(
            response => dispatch(fetchSuccess(response.data))
        );
    };
};

export const createLink = link => {
    return dispatch => {
        return axios.post('/links', link).then(
            (result) => dispatch(createLinkSuccess(result.data.shortURL))
        )
    };
};