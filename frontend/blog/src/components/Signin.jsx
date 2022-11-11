import React from 'react'
//import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import { MDBCol, MDBRow, } from 'mdb-react-ui-kit';
// export default class Login extends Component {
function Signin() {
  return (
    <div>
    {/* // <div className="border d-flex align-items-center justify-content-center">
    //   <MDBContainer align center> */}
    <MDBRow className='d-flex justify-content-center'>
    <MDBCol md='6' className='bg-secondary mt-5 text-white'>
      {/* <Navbar /> */}
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
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
      {/* <p className="dont have an account"> */}
        <a href={'/Signup'}>i dont have an account</a>
      </p>
      
      <p className="forgot-password text-right">
        Forgot <a href="">password?</a>
      </p>
    </form>
     {/* </MDBContainer> */}
     </MDBCol>
     </MDBRow>
    {/* </div> */}
    </div>
    
 )
}

export default Signin