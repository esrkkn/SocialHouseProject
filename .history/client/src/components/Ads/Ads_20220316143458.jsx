import React from "react";
import { useEffect, useState, useContext  } from "react";
import { SocialHouseContext } from "../../Context";
import { useHistory } from "react-router";
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
              <h1>List of Apartments</h1>
              <Carousel />
      <div className="cardContainer">
        {posts.map((item) => (
          <MDBCard style={{ maxWidth: "540px" }} key={item._id}>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage src={item.image} alt="..." fluid />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>{item.description}</MDBCardText>
                <MDBCardText>{item.location}</MDBCardText>
                <MDBCardText>
                  <span>{item.rooms}</span>
                  <span>{item.price}</span>
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