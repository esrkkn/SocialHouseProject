import React from "react";
import { useContext } from "react";
import { SocialHouseContext } from "../../Context";
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
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const spacerStyle = {
  flex: "0.7",
};

export default function App() {
  const { userData, setUserData } = useContext(SocialHouseContext);

  const handleLogOut = () => {

    setUserData(null)
  }
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
                    <FcKey style={{ fontSize: 30 }} />
                    SocialHouse<span>Project</span>
                  </h5>
                </MDBNavbarLink>
              </MDBNavbarItem>
              {userData ? (
                
                  <div className="navSection">
                    <div className="navPart">
                    <MDBNavbarItem active>
                      <MDBNavbarLink aria-current="page" href="/">
                        Home
                      </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                      <MDBNavbarLink href="">
                        <NavLink to="/ads">Ads</NavLink>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                  </div>

                  <div className="navPart">
                    {" "}
                    <div style={spacerStyle}></div>
                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <NavLink to="/post">Create Post</NavLink>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <NavLink to="/account">
                          {" "}
                          <FaRegUserCircle />{" "}
                        </NavLink>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <NavLink to="/" onClick={handleLogOut}>
                          {" "}
                          Log Out{" "}
                        </NavLink>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                  </div>
                </div>
              ) : (
                <div className="navSection">
                  <div className="navPart">
                  <MDBNavbarItem active>
                    <MDBNavbarLink aria-current="page" href="/">
                      Home
                    </MDBNavbarLink>
                  </MDBNavbarItem>
</div>
                  <div style={spacerStyle}></div>
                  <div className="navPart" >
                  <MDBNavbarItem>
                    <MDBNavbarLink href="#">
                      <NavLink to="/register">Register</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="#">
                      <NavLink to="/login"> LogIn</NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </div></div>
              )}
              {/* <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                <MDBNavbarLink href=""><NavLink to="/ads">Ads</NavLink></MDBNavbarLink>
              </MDBNavbarItem>

              <div style={spacerStyle}></div>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <NavLink to="/post">Create Post</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <NavLink to="/register">Register</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <NavLink to="/login"> LogIn</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <NavLink to="/account"> <FaRegUserCircle /> </NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem> */}
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}
