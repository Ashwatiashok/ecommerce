import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from '../helpers/FormatPrice'

let Product=(props)=>{

    console.log(props);

    const {id, name, image, price, category} = props;
    
    return(

        <NavLink to={`/singleproduct/${id}`}>
            
                    <div className="col">
                        <div>
                            <img src={image} alt={name} height='200px'/>
                            <h5>{category}</h5>
                        </div>
                        <div>
                            <h3>{name}</h3>
                            <p><FormatPrice price={price}/></p>
                        </div>
                    </div>
               
        </NavLink>
    )
}

export default Product;