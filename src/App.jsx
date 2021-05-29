import React from 'react';
import {Route} from 'react-router-dom';
import './scss/app.scss';
import {BrowserRouter} from 'react-router-dom';
import {Header} from './Components/index';

import Home from './pages/home';
import Cart from './pages/cart';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter> 
 
      <Header/>
      <div className="content">
      <Route path='/' component={Home} exact/>
      <Route path='/cart' component={Cart} exact />
      </div>
     
      </BrowserRouter>
  </div>
  );
}

  
export default App
