import React from "react";
import {TbTruckDelivery} from 'react-icons/tb';
import {BiShieldQuarter} from 'react-icons/bi';
import {GiReceiveMoney} from 'react-icons/gi';
import {RiSecurePaymentLine} from 'react-icons/ri';
import './css/service.css';

let Service=()=>{
    return(
        // <div className="container mt-5">
        //     <div className="row d-flex align-items-center">
        //         <div className="col text-center d-flex justify-content-center">
        //             <div className="row">
        //                 <div className="column">
        //                     <TbTruckDelivery/>
        //                     <p>Super Fast and Free Delivery</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col text-center d-flex justify-content-center">
        //             <div>
        //                 <div className="row">
        //                     <div className="column">
        //                         <BiShieldQuarter/>
        //                         <p>Non-contact Shipping</p>
        //                     </div>
        //                 </div>
        //                 <div className="row">
        //                     <div className="column">
        //                         <GiReceiveMoney/>
        //                         <p>Money-back Guarenteed</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col text-center d-flex justify-content-center">
        //                 <div className="row">
        //                     <div className="column">
        //                         <RiSecurePaymentLine/>
        //                         <p>Super Secure Payment System</p>
        //                     </div>
        //                 </div>
        //         </div>
        //     </div>
        // </div>
        <div className="container1">
            <div className="service-1">
                <div className="column">
                    <TbTruckDelivery/>
                    <p>Super Fast and Free Delivery</p>
                </div>
            </div>
            <div className="service-2">
                <div className="column">
                    <BiShieldQuarter/>
                    <p>Non-contact Shipping</p>
                </div>
                <div className="column">
                    <GiReceiveMoney/>
                    <p>Money-back Guarenteed</p>
                </div>
            </div>
            <div className="service-3">
                <div className="column">
                    <RiSecurePaymentLine/>
                    <p>Super Secure Payment System</p>
                </div>
            </div>
        </div>
    )
}

export default Service;