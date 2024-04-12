import axios from 'axios';

export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES';
export const GET_PROPERTY_BY_ID = 'GET_PROPERTY_BY_ID';


export const getAllProperties = () => {
    return async function(dispatch) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
            return dispatch({
                type: 'GET_ALL_PROPERTIES',
                payload: response.data,
            });
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        
        }
    };
}

export const getPropertyById = (id) => {
    return async function (dispatch) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({
          type: 'GET_PROPERTY_BY_ID',
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  };
  