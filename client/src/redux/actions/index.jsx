/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';

export const ADD_PROPERTY_DETAIL = 'ADD_PROPERTY_DETAIL';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const FILTER_TYPE = 'FILTER_TYPE';
export const GET_ALL_PROPERTIES = 'GET_ALL_PROPERTIES';
export const GET_PROPERTY_BY_ID = 'GET_PROPERTY_BY_ID';
export const GET_PROPERTY_ZONE = 'GET_PROPERTY_ZONE';
export const PRICE_ORDER = 'PRICE_ORDER';
export const POST_NEW_PROPERTY = 'POST_NEW_PROPERTY';
export const POST_TYPE = 'POST_TYPE';
export const POST_CATEGORY = 'POST_CATEGORY';
export const EDIT_PROPERTY = 'EDIT_PROPERTY';
export const GET_USER_INFO = 'GET_USER_INFO';
export const EDIT_USER_INFO = 'EDIT_USER_INFO';
export const POST_NEW_REVIEW = 'POST_NEW_REVIEW';
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_SALES = 'GET_ALL_SALES';
export const FILTER_DASHBOARD='FILTER_DASHBOARD';
export const RESET_PROPERTY = 'RESET_PROPERTY';
//export const UPDATE_PROPERTY_STATUS = 'UPDATE_PROPERTY_STATUS';
//export const GET_ALL_TYPES = 'GET_ALL_TYPES';
//export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';


const buildApiUrl = (path) => {
      const BASE_URL = import.meta.env.VITE_ENV === 'production'
      ? import.meta.env.VITE_BACKEND_URL_PRODUCTION
      : import.meta.env.VITE_BACKEND_URL_LOCAL;
  return `${BASE_URL}${path}`;
};


export const getAllProperties = (page, pageSize) => {
  return async function(dispatch) {
      try {
          const url=buildApiUrl(`/property/getProperties?page=${page}&pageSize=${pageSize}`)
          const response = await axios.get(url);
          return dispatch({
              type: 'GET_ALL_PROPERTIES',
              payload: response.data,
          });
      } catch (error) {
          console.error('Error al obtener los datos:', error);
      }
  };
};


export const getPropertyById = (id) => {
    return async function (dispatch) {
      try {
        const url = buildApiUrl(`/propertyId/${id}`);
        const response = await axios.get(url);
        dispatch({
          type: 'GET_PROPERTY_BY_ID',
          payload: response.data,
        });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
};
  
  
export function addProperty(zone) {
const url=buildApiUrl(`/property/filterProperties?zone=${zone}`)
return async (dispatch) => {
    try {
    const { data } = await axios.get(url);
    return dispatch({
        type: GET_PROPERTY_ZONE,
        payload: data,
    });
    } catch (error) {
    alert("Property NOT FOUND!!!");//
    }
};
}

 
export function addPropertyDetail(id) {
return async (dispatch) => {
    try {
        const url = buildApiUrl(`/property/${id}`);
        const response = await axios.get(url);
        const propertyDetail = response.data;

        dispatch({
            type: ADD_PROPERTY_DETAIL,
            payload: propertyDetail,
        });
    } catch (error) {
        console.error("Error fetching Property details:", error.message);
    }
};
}


export const postNewProperty = (payload) => {
  return async function (dispatch) {
      try {
          const url = buildApiUrl('/property');
          const response = await axios.post(url, payload);
          dispatch({ 
              type: 'POST_NEW_PROPERTY',
              payload: response.data
          });
          return response.data;
      } catch (error) {
          console.error('Error posting new property:', error);
          throw error;
      }
  };
};


export const postType = (payload) => {
  return async function (dispatch) {
      try {
          const url = buildApiUrl('/type');
          const response = await axios.post(url, payload);
          dispatch({ 
              type: 'POST_TYPE',
              payload: response.data
          });
          return response.data;
      } catch (error) {
          console.error('Error posting property type:', error);
          throw error;
      }
  };
};


export const postCategory = (payload) => {
  return async function (dispatch) {
      try {
          const url = buildApiUrl('/category');
          const response = await axios.post(url, payload);
          dispatch({ 
              type: 'POST_CATEGORY',
              payload: response.data
          });
          return response.data;
      } catch (error) {
          console.error('Error posting property category:', error);
          throw error;
      }
  };
};


export const editProperty = (propertyId, updatedProperty) => {
    return async function (dispatch) {
        try {
            const url = buildApiUrl(`/edit/${propertyId}`);
            const response = await axios.put(url, updatedProperty);
            dispatch({ 
                type: 'EDIT_PROPERTY',
                payload: response.data
            });
            return response.data;
        } catch (error) {
            console.error('Error posting new property:', error);
            throw error;
        }
    };
};


export const filterCombined = (type, category, priceOrder, zone,page) => {
  return async (dispatch) => {
      try {
          // Construir la URL base
          let url = buildApiUrl('/property/filterProperties');

          // Construir los parámetros de la URL basados en los filtros seleccionados
          const queryParams = [];
          if (type !== 'all') {
              queryParams.push(`type=${type}`);
          }
          if (category !== 'all') {
              queryParams.push(`category=${category}`);
          }
          if (priceOrder !== 'default') {
              queryParams.push(`priceOrder=${priceOrder}`);
          }
          if (zone !== 'default') {
              queryParams.push(`zone=${zone}`);
            
          }
          if (page) {
            queryParams.push(`page=${page}`);
          }


          // Si hay parámetros, agregarlos a la URL
          if (queryParams.length > 0) {
              url += '?' + queryParams.join('&');
          }

          // Realizar la solicitud GET con la URL construida
          const {data} = await axios.get(url);
          const properties=data.properties
          
          const filterProperties=properties.filter(property => property.isActive );
       
          const meta=data.meta
          dispatch({
              type: 'FILTER_TYPE',
              payload: {properties,meta}
          });
      } catch (error) {
          console.error(error);
          throw error;
      }
  };
};




export const filterDashboard = (type, category, priceOrder, zone,page) => {
    return async (dispatch) => {
        try {
            // Construir la URL base
            let url = buildApiUrl('/property/notIs');
  
            // Construir los parámetros de la URL basados en los filtros seleccionados
            const queryParams = [];
            if (type !== 'all') {
                queryParams.push(`type=${type}`);
            }
            if (category !== 'all') {
                queryParams.push(`category=${category}`);
            }
            if (priceOrder !== 'default') {
                queryParams.push(`priceOrder=${priceOrder}`);
            }
            if (zone !== 'default') {
                queryParams.push(`zone=${zone}`);
              
            }
            if (page) {
              queryParams.push(`page=${page}`);
            }
  
  
            // Si hay parámetros, agregarlos a la URL
            if (queryParams.length > 0) {
                url += '?' + queryParams.join('&');
            }
  
            // Realizar la solicitud GET con la URL construida
            const {data} = await axios.get(url);
            const properties=data.properties
            const meta=data.meta
            console.log(meta);
            dispatch({
                type: 'FILTER_DASHBOARD',
                payload: {properties,meta}
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
  };


export const getUserInfo = (userEmail) => {
    return async function(dispatch) {
        try {
            const url=buildApiUrl(`/user?email=${userEmail}`)   
            const response = await axios.get(url);
            localStorage.setItem('user', JSON.stringify(response.data));
            return dispatch({
                type: 'GET_USER_INFO',
                payload: response.data,
            });
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };
    };
      
    export const editUserInfo = (userId, updatedUserData) => {
        return async function (dispatch) {
            try {
                const url = buildApiUrl(`/user/${userId}`);
                const response = await axios.put(url, updatedUserData);
                dispatch({ 
                    type: 'EDIT_USER_INFO',
                    payload: response.data
                });
                return response.data;
            } catch (error) {
                console.error('Error posting new property:', error);
                throw error;
            }
        };
    };
    

export const postNewReview = (payload) => {
    return async function (dispatch) {
        try {
            const url = buildApiUrl('/review');
            const response = await axios.post(url, payload);
            dispatch({ 
                type: 'POST_NEW_REVIEW',
                payload: response.data
            });
            return response.data;
        } catch (error) {
            console.error('Error posting new review:', error);
            throw error;
        }
    };
};

export const getAllReviews = () => {
    return async function(dispatch) {
        try {
            const url = buildApiUrl('/review');   
            const response = await axios.get(url);
            return dispatch({
                type: 'GET_ALL_REVIEWS',
                payload: response.data,
            });
        } catch (error) {
            console.error('Error al obtener los datos de las revisiones:', error);
        }
    };
};

export const getAllUsers = () => {
    return async function(dispatch) {
        try {
            const url = buildApiUrl('/users');   
            const response = await axios.get(url);
            return dispatch({
                type: 'GET_ALL_USERS',
                payload: response.data,
            });
        } catch (error) {
            console.error('Error al obtener los datos de las revisiones:', error);
        }
    };
};

export const getAllSales = () => {
    return async function(dispatch) {
        try {
            const url = buildApiUrl('/sales');
            const response = await axios.get(url);
            console.log('response', response);
            return dispatch({
                type: 'GET_ALL_SALES',
                payload: response.data,
            });
        } catch (error) {
            console.error('Error al obtener las reservas:', error);
        }
    };
};

export const resetProperty = () => ({
    type: RESET_PROPERTY,
  });

// export function updatePropertyStatus(propertyId, isActive) {
//   return async function(dispatch) {
//     try {
//       await axios.put(`/update/${propertyId}`, { isActive });
//       dispatch({
//         type: UPDATE_PROPERTY_STATUS,
//         payload: { propertyId, isActive }
//       });
//     } catch (error) {
//       console.error('Error updating property status:', error);
//       throw error;
//     }
//   };
// }

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
