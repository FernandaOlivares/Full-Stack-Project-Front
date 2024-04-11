import axios from 'axios';

export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES';

export function getAllProperties(){
    return async function (dispatch){
        const response = await axios('http://localhost:3001/pyd')
        return dispatch({
            type:'GET_ALL_PROPERTIES',
            payload: response.data,
        })
    };
}

