import React from 'react';




const LoginForm = (props) => {

    
    return(
          
        <div className="widget">
          <form className="single-newsletter-inner bg-blue text-center">
            <h3 className="mb-3">Login</h3>
            {/*  <p>Stay Updated on all that's new add noteworthy</p> */}
            <div className="single-input-inner ">
              <input className="mb-3" type="email" placeholder="Enter Your Email" />
            </div>
            <div className="single-input-inner">
              <input className="mb-3" type="password" placeholder="Enter Your Password" />
            </div>
            <div className="d-flex justify-content-end">  <a className="w-25 mb-2" href="#" >Forgot Password?</a></div>
            <div className=" d-flex flex-column align-items-start ">
              <label htmlFor="remember">
                <input className="mr-1" id="remember" type="checkbox" /><span>Remember Me</span>
                </label>
              </div>
            <button className="btn btn-white w-100 " href="#">Login  Now</button>
            <div className="d-flex justify-content-center mt-5 sign-up">
              <p>Don't have an Account? <a>Sign Up</a></p>
            </div>
          </form>
        </div>
        
    )

}

export default LoginForm;