import axios from 'axios';

export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES';
export const GET_PROPERTY_BY_ID = 'GET_PROPERTY_BY_ID';
export const POST_NEW_PROPERTY = 'POST_NEW_PROPERTY';
//export const GET_ALL_TYPES = 'GET_ALL_TYPES';


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
  
export const postNewProperty = (payload) => {
  return async function (dispatch) {
      try {
          const response = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);  //http://localhost:3001/property
          dispatch({ 
              type: 'POST_NEW_PROPERTY',
              payload: response.data
          });
          return response.data;
      } catch (error) {
          console.error('Error posting new property:', error);
          throw error;
      }
  }
};

/*
export const getAllTypes = () => {
  return async function (dispatch) {
      try {
          const response = await axios.get('http://localhost:3001/type');
          dispatch({
              type: 'GET_ALL_TYPES',
              payload: response.data,
          });
      } catch (error) {
          console.error('Error fetching all types:', error);
      }
  }
};
*/