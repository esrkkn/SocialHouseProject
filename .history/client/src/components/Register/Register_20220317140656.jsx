import React from 'react';
import { useState } from "react";
import axios from "axios";
import "./Register.css"
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-bootstrap';

export default function Register() {
    const [data, setData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
  
    
  
    const handleClick = async (e) => {
  
  
  
      console.log("data is", data);
  
     if (!data.password || !data.email) return;
  
      const response = await axios.post("/users/register", data);
      console.log("response is", response);
  
      setData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
        })
       
    };


  return (
    <div className="text-center bg-images" >
    <div className="loginPage">
    <div class="container">
      <div class="row align-items-center my-5">
        <div class="col-lg-">
       
        </div>
        <div class="col-lg">
          <h2 class="font-weight-light">Register</h2>
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput
           id='form3Example1' 
           placeholder="First Name" 
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })} 
          />
        </MDBCol>
        <MDBCol>
          <MDBInput 
          id='form3Example2' 
          placeholder="Last Name" 
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </MDBCol>
      </MDBRow>
      <MDBInput 
      className='mb-4' 
      type='email' 
      id='form3Example3' 
      placeholder="Email"
      value={data.email}
      onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <MDBInput 
      className='mb-4' 
      type='phone number' 
      id='form3Example4' 
      placeholder="Phone Number" 
      value={data.phoneNumber}
      onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
      />
      <MDBInput 
      className='mb-4' 
      type='password' 
      id='form3Example5' 
      placeholder="Password" 
      value={data.password}
     onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <MDBBtn type='submit' className='mb-4' block variant="outline-secondary" onClick={handleClick} color='info'>
        <NavLink>Submit</NavLink>
      </MDBBtn>{" "}

      <div className='text-center'>
        <p>
          Already a member? <a href='#!'>Sign In</a>
        </p>
        <p>or Register with:</p>

        <MDBBtn floating className='mx-1' color='primary'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating className='mx-1' color='danger'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating className='mx-1' color='info'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating className='mx-1' color='dark'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </div>
        </div>
      </div>
    </div>
    </div>
  );
}