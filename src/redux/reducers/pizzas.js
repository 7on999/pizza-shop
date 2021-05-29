import axios from 'axios';


const initialState={
    items: [],
    isLoaded: false,
}

const pizzasReducer=(state=initialState, action)=>{
    switch(action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }
            case 'SET_LOADING':
                return {
                    ...state,
                    isLoaded: action.value
                }
        default:
            return state
    }
}

export const setLoading = (value)=>{
    return {
        type: 'SET_LOADING',
        value
    }
}

export const setPizzasAC=(items)=>{
    return {
        type:'SET_PIZZAS',
        payload: items
    }
}

export const fetchPizzas = (categoryIndex, sortBy)=>{
    return (dispatch)=>{
        dispatch(setLoading(false))
        axios.get(`pizzas?${
            categoryIndex!==null? `category=${categoryIndex}`: ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`)
            .then(({data})=>dispatch(setPizzasAC(data)))
    }
}

export default pizzasReducer;