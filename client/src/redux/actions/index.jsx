import axios from 'axios';

export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES';


export function getAllProperties() {
    return async function(dispatch) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
            return dispatch({
                type: 'GET_ALL_PROPERTIES',
                payload: response.data,
            });
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        
        }
    };
}