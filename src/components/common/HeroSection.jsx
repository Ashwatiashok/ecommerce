import React from "react";
import heroSec from '../assets/heroSec.jpg'
import Button from "./Button";


let HeroSection=()=>{
    return(
       <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-4">
                <h4>Welcome To</h4>
                <h3>store</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem eveniet, assumenda tenetur culpa labore hic natus possimus sed reprehenderit reiciendis aperiam repellat sit unde, consequuntur dolore qui sapiente nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button text='View Here' btstrp='btn btn-primary'/>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <img src={heroSec} style={{height:'300px',width:'350px'}}/>
            </div>
        </div>
       </div>

    )
}

export default HeroSection;