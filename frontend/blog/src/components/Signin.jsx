
//import Navbar from './Navbar'


import { MDBCol, MDBRow, } from 'mdb-react-ui-kit';

import axios from '../Axios';


import Constants from "../constants.json";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signin({setrefresh}) {
  
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handlesubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
   
    if (email && password){
      const data ={email, password};
      axios({
        method: "post",
        url: "/user/signin",
        data: data,
      })
        .then((response) => {
          if (response.data) {
            console.log(response.data);


            localStorage.setItem(
              Constants.LOCALSTORAGE_TOKEN_ISLOGGEDIN,
              JSON.stringify(true)
            );

            localStorage.setItem(
              Constants.LOCALSTORAGE_TOKEN_USERID,
              response.data._id
            );

            localStorage.setItem(
              Constants.LOCALSTORAGE_TOKEN_USERNAME,
              response.data.name
            );

            localStorage.setItem(
              Constants.LOCALSTORAGE_TOKEN_USER_ROLE,
              response.data.role
            );
             console.log("backend", response.data.role);
             console.log("const",Constants.USERTYPE_ADMIN );

             setrefresh()
            if (response.data.role === Constants.USERTYPE_ADMIN) {
              navigate("/Admin");
            } else {
             
              navigate("/Blogfeed");
            }
          } else {

            
            // localStorage.clear();
          }
        })
        .catch((err) => {
          console.log("Error" + err);
        });
    }
  };
    
  
  return (
    <div>
    
    <MDBRow className='d-flex justify-content-center'>
    <MDBCol md='6' className='bg-secondary mt-5 text-white'>

    <form className="login-form" onSubmit={handlesubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          id="email"
          required={true}
          ref={emailRef}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
         id="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          required={true}
          ref={passwordRef}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p class="url-dark">"dont have an account"

        <a href={'/Signup'}>i dont have an account</a>
      </p>
      
      {/* <p className="forgot-password text-right">
        Forgot <a href="">password?</a>
      </p> */}
    </form>
     {/* </MDBContainer> */}
     </MDBCol>
     </MDBRow>
    {/* </div> */}
    </div>
    
 )
}

export default Signin