export const ADD_FEATURE = 'ADD_FEATURE'; //action type
export const REMOVE_FEATURE = 'REMOVE_FEATURE'; //action type
export const UPDATE_TOTAL = 'UPDATE_TOTAL'; //action type



export const addFeature = item => {
// dispatch an action here to add an item
    console.log(item);
    return{ //action
        type: ADD_FEATURE,
        payload: item
    }
};

export const removeFeature = item => {
    // console.log(item);
    return{ //action
        type: REMOVE_FEATURE,
        payload: item
    }
};

export const updateTotal = item => {
    // console.log(item);
    return{ //action
        type: UPDATE_TOTAL,
        payload: item
    }
};