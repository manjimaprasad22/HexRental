import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'


const Login = () => {
  const navigate =  useNavigate()
  const register=()=>{
    navigate('/register')
  }
  return (
    <div>
        <Navbar/>
         <div className="content_auth" >
      <div className="cover-shadow"></div>
      <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 ">
              <div className="form_auth">
                <h2> Please Login To Continue</h2>
                <div className="fields_fm">
                  <label>User Name</label>
                  <input type="text" name="" placeholder="Enter Your User Name"/>
                </div>
                <div className="fields_fm">
                  <label>Password</label>
                  <input type="text" name="" placeholder="Enter Your Password"/>
                </div>
                <button>Login</button>
                <Link to={'/forgotpassword'}>Forgot Password? </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6  flex-center">
              <div className="reg-login">
                <h2>New Customer? </h2>
                <button onClick={register}>Create New Account</button>
                <p>
                  <i className="far fa-clock"></i>Save Time
                  <span>Fastest pick up and drop off car rental</span>
                </p>
                <p><i className="fas fa-cog"></i>
                  Manage Your Car Rental
                  <span>Booking and reserving cars are even more faster to manage</span>
                </p>
                <p>
                 <i className="fas fa-user"></i> Access Your Account
                  <span>Anytime and wherever you are</span>
                </p>
              </div>

            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login