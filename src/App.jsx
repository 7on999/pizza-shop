import React from 'react';
import {Route} from 'react-router-dom';
import './scss/app.scss';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './Components/index';


// import {fetchPizzas} from './redux/reducers/pizzas';


import Home from './pages/home';
import Cart from './pages/cart';


function App() {






  // window.test=()=>{
  //   axios.get('http://localhost:3001/db.json')
  //   .then(({data})=>dispatch(setPizzasAC(data.pizzas)))
  // }

  return (
    <div className="wrapper">
      <BrowserRouter> 
 
      <Header/>
      <div className="content">
      <Route path='/' exact component={Home}/>
      <Route path='/cart' component={Cart} exact />
      </div>
     
      </BrowserRouter>
  </div>
  );
}


// class App extends React.Component  {


//   componentDidMount(){
//     axios.get('http://localhost:3000/db.json')
//     // .then(response=>{ window.store.dispatch(setPizzasAC(response.data.pizzas))
      
//     .then(response=>{ this.props.setPizzasAC(response.data.pizzas)
//     })
//   }

  

//   render(){
//     console.log(this.props)
//     return (
//       <div className="wrapper">
//         <BrowserRouter> 
       
//         <Header/>
//         <div className="content">
//         <Route path='/' exact render={()=> <Home items={this.props.pizzaBlock}/>}/>
//         <Route path='/cart' component={Cart} exact />
//         </div>
       
//         </BrowserRouter>
//     </div>
//     );
//   }
// }
 
  

// const mapDispatchToProps = {
//    setPizzasAC
// }

// const mapStateToProps=(state)=>{
//   return {
//     pizzaBlock:state.pizzas.items,
//     category: state.filters.category,
//     sortBy: state.filters.sortBy
//   }
// }

  
export default App
