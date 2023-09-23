import React from "react";
import HeroSection from "../common/HeroSection";
import Service from "../Service";
import {AppContext,useProductContext} from '../../context/ProductContext';
import FeatureProduct from "../FeatureProduct";


let Home=()=>{
    
    // let useData = useProductContext();

    
    return(
        <div>
            <HeroSection/>
            <FeatureProduct/>
            <Service/>
        </div>
    )
}

export default Home;