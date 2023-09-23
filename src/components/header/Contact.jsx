import React from "react";

let Contact=()=>{
    return(
        <>
        <div>
            <h3 className='text-center mt-3'>Contact Us</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.72639832257!2d77.67192134638667!3d12.958038613841822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b4551d0957%3A0x597894d77e1e4919!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1694846876085!5m2!1sen!2sin" width='100%' height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">  
            </iframe>
        </div>
        <div className="container mt-3">
            <div className="row d-flex justify-content-center my-2">
                <div className="col-3">
                    <input type="text" placeholder='Username' className='form-control' name='username'/>
                </div>
            </div>
            <div className="row d-flex justify-content-center my-2">
                <div className="col-3">
                    <input type="email" placeholder='Email' className='form-control' name='email'/>
                </div>
            </div>
            <div className="row d-flex justify-content-center my-2">
                <div className="col-3">
                    <textarea name="message" id="" cols="30" rows="5" placeholder='Please enter you message!' className='form-control'></textarea>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Contact;