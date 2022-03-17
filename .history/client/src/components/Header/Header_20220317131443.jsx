import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { FcKey } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const spacerStyle = {
  flex: "0.7",
};

export default function App() {
  return (
    <header className="text-center bg-image" >
      <MDBNavbar expand="lg" light bgColor="white" sticky className="navbarExample02">
        <MDBContainer fluid>
          <MDBNavbarToggler aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/">
                  <h5 className="logo">
                    <FcKey style={{ fontSize: 30 }} />
                    SocialHouse<span>Project</span>
                  </h5>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/" style={{color:"grey"}}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink ><NavLink to="/ads" style={{textDecorationLine: "none", color:"black"}}>Ads</NavLink></MDBNavbarLink>
              </MDBNavbarItem>

              <div style={spacerStyle}></div>
              <MDBNavbarItem>
                <MDBNavbarLink >
                  <NavLink to="/post" style={{textDecorationLine: "none", color:"black"}}>Create Post</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink >
                  <NavLink to="/register" style={{textDecorationLine: "none", color:"black"}}>Register</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink >
                  <NavLink to="/login" style={{textDecorationLine: "none", color:"black"}}> Login</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
