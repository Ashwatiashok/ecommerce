import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/header/Home';
import About from './components/header/About';
import Product from './components/Product';
import Contact from './components/header/Contact';
import Footer from './components/footer/Footer';
import ErrorPage from './components/common/ErrorPage';
import Cart from './components/header/Cart';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <Router>
 
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/singleproduct/id' element={<SingleProduct/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
 
    </Router>
  );
}

export default App;
