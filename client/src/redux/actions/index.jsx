import axios from 'axios';

export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES';
export const GET_PROPERTY_BY_ID = 'GET_PROPERTY_BY_ID';
export const POST_NEW_PROPERTY = 'POST_NEW_PROPERTY';
export const POST_TYPE = 'POST_TYPE';
export const POST_CATEGORY = 'POST_CATEGORY';
//export const GET_ALL_TYPES = 'GET_ALL_TYPES';
//export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';


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
          const response = await axios.post('http://localhost:3001/property', payload);
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

export const postType = (payload) => {
  return async function (dispatch) {
      try {
          const response = await axios.post('http://localhost:3001/type', payload);
          dispatch({ 
              type: 'POST_TYPE',
              payload: response.data
          });
          return response.data;
      } catch (error) {
          console.error('Error posting property type:', error);
          throw error;
      }
  }
};

export const postCategory = (payload) => {
  return async function (dispatch) {
      try {
          const response = await axios.post('http://localhost:3001/category', payload);
          dispatch({ 
              type: 'POST_CATEGORY',
              payload: response.data
          });
          return response.data;
      } catch (error) {
          console.error('Error posting property category:', error);
          throw error;
      }
  }
};





/*export const getAllTypes = () => {
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

export const getAllCategories = () => {
  return async function (dispatch) {
      try {
          const response = await axios.get('http://localhost:3001/category');
          dispatch({
              type: 'GET_ALL_CATEGORIES',
              payload: response.data,
          });
      } catch (error) {
          console.error('Error fetching all categories:', error);
      }
  }
};*/
