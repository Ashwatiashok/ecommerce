import React from "react";

let Button=(props)=>{
    return(
        <div>
            <button className={props.btstrp}>{props.text}</button>
        </div>
    )
}

export default Button;