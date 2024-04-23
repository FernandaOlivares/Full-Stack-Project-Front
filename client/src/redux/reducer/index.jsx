/* eslint-disable no-case-declarations */
import { 
    ADD_PROPERTY_DETAIL,
    FILTER_CATEGORY,
    FILTER_TYPE,
    GET_ALL_PROPERTIES,
    GET_PROPERTY_BY_ID,
    GET_PROPERTY_ZONE,
    PRICE_ORDER,
    POST_NEW_PROPERTY,
    POST_TYPE,
    POST_CATEGORY,
    //UPDATE_PROPERTY_STATUS,
    //GET_ALL_TYPES,
} from '../actions/index.jsx';

const initialState = {
    allProperties: [],
    allPropertiesBackup: [],
    allTypes: [],
    allTypesBackup: [],
    allCategories: [],
    allCategoriesBackup: [],
    property: [],
    propertyById: [],
    propertiesFiltered:[],
    newPropertyId: null,
    error: null,
};

function rootReducer(state = initialState, action){
    switch(action.type){
      case GET_ALL_PROPERTIES:
          return{
              ...state,
              allProperties: action.payload,
              allPropertiesBackup: action.payload,
          }

      case GET_PROPERTY_BY_ID: {
            return {
                ...state,
                propertyById: action.payload, 
            };
      }

      case GET_PROPERTY_ZONE:
            return {
                ...state,
                allProperties: action.payload
            };

      case PRICE_ORDER: 
            return {
                ...state,
                allProperties: action.payload,
            };

      case ADD_PROPERTY_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };

      case FILTER_TYPE: 
            return {
                ...state,
                allProperties: action.payload,
                propertiesFiltered:action.payload

            };

      case FILTER_CATEGORY: {
            return {
                ...state,
                allProperties: action.payload,
            };
      }
  
      case POST_NEW_PROPERTY: {
            return {
                ...state,
                newPropertyId: action.payload.id,
            };
      }

      case POST_TYPE: {
            return {
                ...state,
                allTypes: action.payload,
            };
      }

      case POST_CATEGORY: {
            return {
                ...state,
                allCategories: action.payload,
            };
      }
      
      // case UPDATE_PROPERTY_STATUS:
      //   const { propertyId, isActive } = action.payload;
      //       return {
      //           ...state,
      //           allProperties: state.allProperties.map(property => {
      //           if (property.id === propertyId) {
      //             return {
      //               ...property,
      //               isActive
      //             };
      //           }
      //         return property;
      //         })
      //       };      


      /*case GET_ALL_TYPES:
          return {
              ...state,
              allTypes: action.payload,
              allTypesBackup: action.payload,
          };*/

      default:
          return state;
  }

}

export default rootReducer;