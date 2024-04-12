import { 
    GET_ALL_PROPERTIES,
    GET_PROPERTY_BY_ID,
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

        default:
            return state;
    }

}

export default rootReducer;