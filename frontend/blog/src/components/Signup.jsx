
import { MDBCol, MDBRow, } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import axios from "../Axios";
import React, {  useRef } from "react";


export default function SignUp() {
  
  const nameRef = useRef();
  const emailRef = useRef();
  const dobRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const dob = dobRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmRef.current.value.trim();

    
    if (name && email && dob && password && confirmPassword) {
      if (password === confirmPassword) {
        const data = {
          name,
          email,
          dob,
          password,
          role: "user",
        };

        axios({
          method: "post",
          url: "/user/signup",
          data: data,
        }).then((response) => {
          if (response.data) {
            alert("created");
            console.log(data);
            navigate("/signin");
          } else {
            alert("error")
            
          }
        });
      } else {

        alert("Passwords should match");
      }
    }
  };
    return (
      <MDBRow className='d-flex justify-content-center'>
    <MDBCol md='6' className='bg-secondary mt-5 text-white'>
      <form className="form-container" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
          id="name"
            type="text"
            className="form-control"
            placeholder="First name"
            required={true}
          ref={nameRef}
          />
        </div>
     
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            required={true}
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label>Date of birth</label>
          <input
            type="date"
            id="dob"
            className="form-control"
            placeholder="Enter Date OF Birth"
            required={true}
            ref={dobRef}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required={true}
             ref={passwordRef}
          />
        </div>
        
        <div className="mb-3">
          <label>Retype-Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required={true}
          ref={confirmRef}
          
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/signin">sign in?</a>
        </p>
      </form>
      </MDBCol>
      </MDBRow>
    )
}