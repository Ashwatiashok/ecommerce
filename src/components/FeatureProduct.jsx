import React from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";
import './css/featureproduct.css';

let FeatureProduct=()=>{

    const {isLoading, featureProducts} = useProductContext();

    if(isLoading){
        return <h2>...Loading</h2>
    }

    return(
       
            <div className="container">
                <h3 className="text-center mt-5">Featured Products</h3>
                    <div className="row-6 d-flex justify-content-center gap-3">
                        {
                            featureProducts.map((elem)=>{
                   
                                    return <Product {...elem} key={elem.id} />
                    
                                })
                        }
                    </div>
            </div>
 
    )
}

export default FeatureProduct;