import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import {PiShoppingBagOpenFill} from 'react-icons/pi';
import {AiOutlineShoppingCart} from 'react-icons/ai'


let NavBar=()=>{

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div className="brandlogo"><PiShoppingBagOpenFill/></div>
    <a class="navbar-brand" href="#">store</a>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><Link to='/' class="nav-link active" aria-current="page">HOME</Link></li>
        <li class="nav-item"><Link to='/about' class="nav-link">ABOUT</Link></li>
        <li class="nav-item"><Link to='/products'class="nav-link">PRODUCTS</Link></li>
        <li class="nav-item"><Link to='/contact' class="nav-link">CONTACT</Link></li>
        <Button text='Log In' btstrp='btn btn-primary'/>
        <li class='nav-item mx-2'><Link to='/cart' class='nav-link'><AiOutlineShoppingCart/></Link></li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar;