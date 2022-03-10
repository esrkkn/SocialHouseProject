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
    <header className="text-center bg-image">
      <MDBNavbar
        expand="lg"
        light
        bgColor="white"
        sticky
        className="navbarExample02"
      >
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/">
                  <h5 className="logo">
                    <FcKey style={{fontSize: 30}}/>
                    SocialHouse<span>Project</span>
                  </h5>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="">Ads</MDBNavbarLink>
              </MDBNavbarItem>
            
              <div style={spacerStyle}></div>
              <MDBNavbarItem>
                <MDBNavbarLink >Create Post</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"><NavLink to="/register">Register</NavLink></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"><NavLink to='/login'> LogIn</NavLink></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          width: "100%",
          height: "95vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className="nine">
              <h1 className="mb-3">
                Welcome to Social House Project
                <span className="mb-3">
                  Discover & Connect & Share over Housing
                </span>
              </h1>
              <button className="btn btn-outline-light btn-lg" href="#">
                Find Your House, Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
