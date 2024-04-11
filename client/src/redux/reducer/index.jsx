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
        default:
            return state;
    }

}

export default rootReducer;