const initialState = {
    categoryIndex: null,
    sortBy: {
        type: 'popular',
        order: 'desc',
    },
}

const filtersReducer=(state=initialState, action)=>{
    switch(action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
            case 'SET_CATEGORY':
            return {
                ...state,
                categoryIndex: action.payload,
            }
        default:
            return state
    }
}

export const setCategoryAC= (index)=>{
    return {
        type: 'SET_CATEGORY',
        payload: index,
    }
}

export const sortItems= (kind)=>{
    return {
        type: 'SET_SORT_BY',
        payload: kind,
    }
}

export default filtersReducer