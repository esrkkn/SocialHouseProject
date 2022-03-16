import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "./Register.css"


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
    <Form action="register" className="formContainer">

      <FloatingLabel controlId="firstName" label="First Name" className="mb-3">
        <Form.Control
        required
          type="text"
          placeholder="First Name"
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
        />
      </FloatingLabel>

      <FloatingLabel controlId="lastName" label="Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
        />
      </FloatingLabel>

      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="phoneNumber"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Phone Number"
          value={data.phoneNumber}
          onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
        />
      </FloatingLabel>

      <FloatingLabel controlId="password" label="Password" className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </FloatingLabel>

      <Button variant="outline-secondary" onClick={handleClick}  >
        Register
      </Button>{" "}
    </Form>
  );
}
