import React from "react";
import { useState, useContext, useEffect} from "react";
import { useHistory } from "react-router";
import { SocialHouseContext } from "../../Context";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Account.css";

export default function Account() {
  const history = useHistory();

  const { userData, setUserData } = useContext(SocialHouseContext);
  const [data, setData] = useState({
    age: 0,
    street: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    
    setData({ ...data, ...userData });
  }, []);

if (!userData) history.push("/");

  const handleSave = async () => {
    console.log("data is ", data);

    const response = await axios.patch("/users/profile", data);

    console.log("response from profile is", response);

    if (response.data.success) setUserData({  ...response.data.user });
  };
console.log("userData from account", userData);
  return (
    <div className="userContainer">
      <div className="image"></div>
      <form className="accForm">
        <h2>Your Account</h2>
        <>
          <Form.Label htmlFor="inputPassword5">First Name</Form.Label>
          <Form.Control
            type="text"
            id="firstName"
            aria-describedby="passwordHelpBlock"
            placeholder={userData.firstName}
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value }), (e) =>setUserData({ ...userData, firstName: e.target.value }) }
          />
        </>
        <>
          <Form.Label htmlFor="inputPassword5">Last Name</Form.Label>
          <Form.Control
            type="text"
            id="lastName"
            aria-describedby="passwordHelpBlock"
            placeholder={userData.lastName}
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value }), (e) =>setUserData({ ...userData, lastName: e.target.value })}
          />
        </>
        <>
          <Form.Label htmlFor="inputPassword5">Phone Number</Form.Label>
          <Form.Control
            type="text"
            id="phoneNumber"
            aria-describedby="passwordHelpBlock"
            placeholder={userData.phoneNumber}
            value={data.phoneNumber}
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value }), (e) =>setUserData({ ...userData, phoneNumber: e.target.value })}
          />
        </>
        <>
          <Form.Label htmlFor="inputPassword5">Age</Form.Label>
          <Form.Control
            type="text"
            id="age"
            aria-describedby="passwordHelpBlock"
            placeholder={userData.age}
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value }, (e) =>setUserData({ ...userData, age: e.target.value }))}
          />
        </>
        <>
          <Form.Label htmlFor="inputPassword5">Street</Form.Label>
          <Form.Control
            type="text"
            id="street"
            aria-describedby="passwordHelpBlock"
            placeholder={userData.street}
            value={data.street}
            onChange={(e) => setData({ ...data, street: e.target.value }, (e) =>setUserData({ ...userData, street: e.target.value }))}
          />
        </>
        <>
          <Form.Label htmlFor="inputPassword5">City</Form.Label>
          <Form.Control
            type="text"
            id="city"
            aria-describedby="passwordHelpBlock"
            placeholder={userData.city}
            value={data.city}
            onChange={(e) => setData({ ...data, city: e.target.value }), (e) =>setUserData({ ...userData, city: e.target.value })}
          />
        </>
        <>
          <Form.Label htmlFor="inputPassword5">Country</Form.Label>
          <Form.Control
            type="text"
            id="country"
            aria-describedby="passwordHelpBlock"
            placeholder={userData.country}
            value={data.country}
            onChange={(e) => setData({ ...data, country: e.target.value }), (e) =>setUserData({ ...userData, country: e.target.value })}
          />
        </>
        <div className="h-center">
          <Button variant="info" type="submit" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
