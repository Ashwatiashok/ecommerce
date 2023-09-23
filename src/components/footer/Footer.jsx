import React from "react";

let Footer=()=>{
    return(
        <footer className="Footer mt-5 bg-primary p-5">
            <div className="footer-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                        
                        </div>
                        <div className="col-lg-8">
                            <div className="footer-1 d-flex">
                                <div>
                                    <h6 className="text-light">Aswathi Ashok</h6>
                                    <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className="footer-2 d-flex">
                                    <h6 className="text-light" >Subscribe</h6>
                                    <input type="text" placeholder="Enter your message"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;