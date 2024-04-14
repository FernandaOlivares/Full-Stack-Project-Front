import { 
    GET_ALL_PROPERTIES,
    GET_PROPERTY_BY_ID,
    POST_NEW_PROPERTY,
    //GET_ALL_TYPES,
} from '../actions/index.jsx';

const initialState = {
    allProperties: [],
    allPropertiesBackup: [],
    allTypes: [],
    allTypesBackup: [],
    allCategories: [],
    allCategoriesBackup: [],
    propertyById: [],
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

        case POST_NEW_PROPERTY: {
        return {
            ...state,
            newPropertyId: action.payload.id,
        };
        }
        
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