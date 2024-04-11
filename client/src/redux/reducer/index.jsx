import { 
    GET_ALL_PROPERTIES,
} from '../actions/index.jsx';

const initialState = {
    allProperties: [],
    allPropertiesBackup: [],
    allTypes: [],
    allTypesBackup: [],
    allCategories: [],
    allCategoriesBackup: [],
    propertiesById: [],
    newPropertyId: null,
    error: null,
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_PROPERTIES:
            return{
                ...state,
                allProperties: action.payload,
            }

        default:
            return state;
    }

}

export default rootReducer;