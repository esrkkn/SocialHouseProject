import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { SocialHouseContext } from "../../Context";
import './LoginPage.css';

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { setUserData } = useContext(SocialHouseContext);

  

  const handleClick = async () => {

    console.log("data is", data)

    if (!data.password) return

    const response = await axios.post("users/login", data);

    console.log("response is", response);
    

    if (response.data.success) {
      setUserData({ ...response.data.user });
    }

    


    
  };



  return (
    <form className="formContainer">
      <MDBInput
        className="mb-4"
        type="email"
        id="form2Example1"
        label="Email address"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <MDBInput
        className="mb-4"
        type="password"
        id="form2Example2"
        label="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <MDBRow className="mb-4">
        <MDBCol className="d-flex justify-content-center">
          <MDBCheckbox id="form2Example3" label="Remember me" defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href="#!">Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type="button" className="mb-4" block onClick={handleClick} >
      <NavLink to="/ads">Sign in</NavLink>
      </MDBBtn>

      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating className="mx-1">
          <MDBIcon fab icon="facebook-f" />
        </MDBBtn>

        <MDBBtn floating className="mx-1">
          <MDBIcon fab icon="google" />
        </MDBBtn>

        <MDBBtn floating className="mx-1">
          <MDBIcon fab icon="twitter" />
        </MDBBtn>

        <MDBBtn floating className="mx-1">
          <MDBIcon fab icon="github" />
        </MDBBtn>
      </div>
    </form>
  );
}
