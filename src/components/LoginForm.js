import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


function LoginForm() {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = (e)=>{
    e.preventDefault();
    console.log(email + password);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate("/dashboard");
      setError(false);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      setError(true);
    });
  }
  return (
    <>
    <Navbar></Navbar>
    <MDBContainer className="my-5 gradient-form" style={{"box-shadow": "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src={require("/Users/rahul/edutech/src/media/login.png")}
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Login</h4>
            </div>

            <MDBInput wrapperClass='mb-4' placeholder='Username' id='form1' type='email' onChange={e => setEmail(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password' onChange={e => setPassword(e.target.value)}/>

            <div className="text-center pt-1 mb-5 pb-1">
            {/* <Link to = "/dashboard"> */}
            {/* </Link> */}
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleOnSubmit}>Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>
            {error && <p>Incorrect Username or Password</p>}
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Link to="/getintouch">
                <MDBBtn outline className='mx-2' color='primary'>
                    Give Us a Chance To Meet You
                </MDBBtn>
              </Link>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5" style={{"background" : "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"}}>
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default LoginForm;