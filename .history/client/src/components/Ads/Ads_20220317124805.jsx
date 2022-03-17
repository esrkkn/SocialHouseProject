import React from "react";
import { useEffect, useState, useContext  } from "react";
import { SocialHouseContext } from "../../Context";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Carousel from "../Home/Carousel"
import Header from "../Header/Header"
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";
export default function Ads() {

    const history = useHistory()

    const [posts, setPosts] = useState([]);

    const { userData } = useContext(SocialHouseContext)

    useEffect( () => {

        if (!userData) history.push('/')

    const getData = async () => {

        const response = await axios.get('posts/list')

        console.log('response is', response);

        setPosts([...response.data])
        
    }

    getData()

}, [])

 

return (
    <div>
              <Header />
              <Carousel />
        <h1 style={{textAlign: "center", marginBottom: "100px"}}>List of Apartments</h1>
      <div className="cardContainer">
        {posts.map((item) => (
          <MDBCard style={{ maxWidth: "100%", padding: "20px" }} key={item._id}>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage src={item.image} alt="..." fluid  />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle style={{ fontSize: "40px", padding: "20px" }}>{item.title}</MDBCardTitle>
                <MDBCardText style={{ fontSize: "20px", marginTop :" 40px", padding: "20px"}}>{item.description}</MDBCardText>
                <MDBCardText style={{ fontSize: "20px", paddingLeft: "20px", fontWeight: "bold"}}>{item.location}</MDBCardText>
                <MDBCardText style={{ fontSize: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "20px" }}>
                  <span>{item.rooms}rm</span>
                  <span style={{ fontSize: "50px", fontWeight: "bold" }}>{item.price}€</span>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        ))}
      </div>
    </div>
)
    
}