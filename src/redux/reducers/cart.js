
const initialState={
    totalCount: 0,
    totalPrice:0,
    items: {},
    uniqPizzas: [],
}


 const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount:action.payload
            }
        case "SET_TOTAL_PRICE":
            return {
                ...state,
                totalPrice:action.payload
            }
        case "ADD_PIZZA":{

                                 
        const newItems = {
                ...state.items,
                [action.payload.id]: state.items[action.payload.id]?
                {
                    ...state.items[action.payload.id],
                    [action.payload.size]: 
                        state.items[action.payload.id][action.payload.size]?
                        [...state.items[action.payload.id][action.payload.size], action.payload]:
                        [action.payload]
                    
                }:
                {
                    [action.payload.size]: [action.payload]

                } 
      }

                const allPizzasArr = getArrOfAllPizzas(newItems);
                const uniqPizzas=getUniqPizzas(allPizzasArr);

                const totalPrice=getTotalPrice(allPizzasArr);

                return {
                    ...state,
                    items:newItems,
                    totalCount: allPizzasArr.length,
                    totalPrice,
                    uniqPizzas
                 
                }
            }

            case "CLEAR_CART" : {
                return {
                    totalCount: 0,
                    totalPrice:0,
                    items: {},
                    uniqPizzas: [],
                }
            }

            case 'PLUS_PIZZA': {

                let newItems = getDeepCopy(state.items);
                newItems[action.payload.id][action.payload.size].push(action.payload);
                const allPizzasArr = getArrOfAllPizzas(newItems);
            
                const totalPrice=getTotalPrice(allPizzasArr);
                
                return {
                    ...state,
                    items:newItems,
                    totalCount: allPizzasArr.length,
                    totalPrice,
                }

            }
            case 'MINUS_PIZZA': {

                let newItems = getDeepCopy(state.items);
                const newArr1 = newItems[action.payload.id][action.payload.size].filter(obj=>obj.type!=action.payload.type);
                const newArr2 = newItems[action.payload.id][action.payload.size].filter(obj=>obj.type==action.payload.type);
                newArr2.pop();
                newItems[action.payload.id][action.payload.size]=[...newArr1, ...newArr2]

                const allPizzasArr = getArrOfAllPizzas(newItems);
               

                const totalPrice = getTotalPrice(allPizzasArr);
                return {
                    ...state,
                    items:newItems,
                    totalCount: allPizzasArr.length,
                    totalPrice,
                }
            }

            case 'DELETE_PIZZAS' :

                let newItems = getDeepCopy(state.items);
            
                const newArr = newItems[action.payload.id][action.payload.size].filter(obj=>obj.type!=action.payload.type)
                newItems[action.payload.id][action.payload.size]=[...newArr];
              
                const allPizzasArr = getArrOfAllPizzas(newItems);
                
    
                const newUniqPizzas=state.uniqPizzas.filter(obj=>obj.type!=action.payload.type||
                    obj.id!=action.payload.id||obj.size!=action.payload.size)

                const totalPrice=getTotalPrice(allPizzasArr);
                return {
                    ...state,
                    items:newItems,
                    totalCount: allPizzasArr.length,
                    totalPrice,
                    uniqPizzas: [...newUniqPizzas]
                 
                }
            default :
            return {
                ...state
            }
    }
}

const getDeepCopy = (obj)=>{ 
    const copy= JSON.parse(JSON.stringify(obj))
    return copy;
}

const getArrOfAllPizzas=(obj)=>{
    return Object.values(obj).map(Object.values).flat(2);
}

const getUniqPizzas=(arr)=>{
    return Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse)
}

const getTotalPrice = (arr)=>{
    return  arr.reduce((sum, obj)=>obj.price+sum,0)
}


export const addPizza = (obj)=>{
    return {
        type: 'ADD_PIZZA',
        payload:obj
    }
}

export const deleteKindPizz = (id, type, size)=>{
    return {
        type: 'DELETE_PIZZAS',
        payload: {id, type, size}
    }
}

export const clearCartAC = ()=>{
    return {
        type:'CLEAR_CART'
    }
}

export const plusPizza = (obj)=>{
    return {
        type: 'PLUS_PIZZA',
        payload:obj
    }
}

export const minusPizza = (obj)=>{
    return {
        type: 'MINUS_PIZZA',
        payload: obj

    }
}

export default cartReducer;


