import React from 'react';
import {Categories,SortWindow, PizzaBlock, LoaderPizzaBlock} from '../Components/index';
import {useSelector, useDispatch} from 'react-redux';
import {setCategoryAC, sortItems} from '../redux/reducers/filters';
import {fetchPizzas} from '../redux/reducers/pizzas';
import {addPizza} from '../redux/reducers/cart';



const Home=()=>{

  const items= useSelector((state)=>state.pizzas.items);
  const isLoaded = useSelector((state)=>state.pizzas.isLoaded)
  const cartItems= useSelector((state)=>state.cart.items);

  const {categoryIndex, sortBy} = useSelector((state)=>state.filters)
  
  const dispatch = useDispatch();
  const categoriesNames=['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const kindsOfSort=[{name:'популярности', type: 'popular', order: 'desc'}, 
                     {name:'цене', type: 'price', order: 'desc'}, 
                     {name:'алфавиту', type: 'name', order: 'asc'}];


  const onSelectItem=React.useCallback((index)=>{
     dispatch(setCategoryAC(index));
  }, [dispatch])


  const onSelectSortBy=React.useCallback((kind)=>{
    dispatch(sortItems(kind));
 }, [dispatch])

const addPizzaToCart = (obj)=>{
  dispatch(addPizza(obj))
}


  React.useEffect(()=>{ 
    dispatch(fetchPizzas(categoryIndex, sortBy));
  }, [categoryIndex, sortBy, dispatch])
  
    return (
        <div className="container">
        <div className="content__top">
          <Categories chooseKindCategory={onSelectItem} kinds={categoriesNames} categoryIndex={categoryIndex}/>
          <SortWindow  onSelectSortBy={onSelectSortBy} activeSortBy={sortBy.type} kindsOfSort={kindsOfSort}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
         {isLoaded?items.map((pizza, index)=>{
           return (<PizzaBlock  addedCount={cartItems[pizza.id]&&Object.values(cartItems[pizza.id]).flat(2).length}  
            onClickAddPizza={(obj)=>{addPizzaToCart(obj)}} key={pizza.id} {...pizza}/>)
         })
          :Array(12)
          .fill(0)
          .map((_, index)=><LoaderPizzaBlock key={index}/>)}
        </div>
      </div>
    )
}

export default Home;