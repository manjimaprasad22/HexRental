import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'

const ForgotPassword = () => {
  return (
    <div>
        <Navbar/>
         <div className="content_auth">
      <div className="cover-shadow"></div>
      <div className="container">
          <div className="row">
            <div className="form_authentication single_item_form">
              <h2> Please Login To Continue</h2>
              <div className="form_auth3">                
                <div className="fields_fm">
                  <label>Enter Your Mobile Number</label>
                  <input type="text" name="" placeholder="Enter Your Mobile Number"/>
                </div>
                
                <div className="full_wd">
                    <button className="reg">Send OTP</button>
                </div>
              </div>
            </div>
            
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ForgotPassword