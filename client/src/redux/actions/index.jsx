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

//export const GET_ALL_TYPES = 'GET_ALL_TYPES';
//export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

const URLfilter = "http://localhost:3001/property/filterProperties"

export const getAllProperties = (page, pageSize) => {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/property/getProperties?page=${page}&pageSize=${pageSize}`);
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
        const response = await axios.get(`http://localhost:3001/propertyId/${id}`);
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
    const endpoint = "http://localhost:3001/property/filterProperties?zone=" + zone;
    return async (dispatch) => {
      try {
        const { data } = await axios.get(endpoint);
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
      console.log(id);
      const endpoint = `http://localhost:3001/property/${id}`;
      try {
        const response = await axios.get(endpoint);
        const propertyDetail = await response.data;
  
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

export function priceOrder(filterPrice) {
  return async function (dispatch) {
    try {
      let url = URLfilter
        const response = await axios.get(`${url}?priceOrder=${filterPrice}`);
        dispatch({ 
            type: 'PRICE_ORDER',
            payload: response.data
        });
        
    } catch (error) {
        console.error('Error price order:', error);
        throw error;
    }
}
}

export function filterType(type) {
    return async function (dispatch){
      try {
        let url = URLfilter
        const response = await axios.get(`${url}?type=${type}`);
        dispatch({
          type: 'FILTER_TYPE',
          payload: response.data
        });
      
      } catch (error) {
        console.log(error)
      }
    };
  }
  
  export function filterCategory(category) {
    return async function (dispatch){
      try {
        let url = URLfilter
        const response = await axios.get(`${url}?category=${category}`);
        dispatch({
          type: 'FILTER_CATEGORY',
          payload: response.data
        });
      
      } catch (error) {
        console.log(error)
      }
    };
  }

  export const filterCombined = (type, category, priceOrder,zone) => {
    return async (dispatch) => {
        try {
            let url = 'http://localhost:3001/property/filterProperties';
//cambiar url a la de railway
            // Construir los parámetros de la URL basados en los filtros seleccionados
            const queryParams = [];
            if ( type !== 'all' ) {
                queryParams.push(`type=${type}`);
            }
            if ( category !== 'all') {
                queryParams.push(`category=${category}`);
            }
            if ( priceOrder !== 'default') {
                queryParams.push(`priceOrder=${priceOrder}`);
            }
            if (zone !== 'default' ){
              queryParams.push(`zone=${zone}`);
          }


          // Si hay parámetros, agregarlos a la URL

            if (queryParams.length > 0) {
                url += '?' + queryParams.join('&');
            }

            const response = await axios.get(url);
            dispatch({
                type: 'FILTER_TYPE',
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

  // export const filterCombined = (type, category, priceOrder) => {
  //   return async (dispatch) => {
  //     try {
  //       let url;
  //       if (category ==='all') {
  //         url = `http://localhost:3001/property/filterProperties?type=${type}`;
  //        } 
  //         if(type === 'all'){url=`http://localhost:3001/property/filterProperties`
  //       }
  //       else {
  //         url = `http://localhost:3001/property/filterProperties?type=${type}&category=${category}&priceOrder=${priceOrder}`;
  //       }
  
  //       const response = await axios.get(url);
  //       dispatch({
  //         type: 'FILTER_TYPE',
  //         payload: response.data
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // };
  // export const filterCombined = (type, category, priceOrder) => {
  //   return async (dispatch) => {
  //     try {
  //       if(!category){const response = axios.get(`http://localhost:3001/property/filterProperties?type=${type}`)}
  //       const response = await axios.get(`http://localhost:3001/property/filterProperties?type=${type}&category=${category}&priceOrder=${priceOrder}`);
  //       dispatch({
  //         type: 'FILTER_TYPE',
  //         payload: response.data
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // };

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
