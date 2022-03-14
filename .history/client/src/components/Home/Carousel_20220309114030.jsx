import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css"

import Card from 'react-bootstrap/Card'


export default function Main({ deviceType }) {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisible: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisible: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisible: 30
    }
  };
  const images = [
    {
      image:
        "https://pictures.immobilienscout24.de/listings/45e13084-4458-4ed7-9cbd-8c9bada4356b-1366656681.jpg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "Möblierte Wohnung, Tram um die Ecke",
      address: "12489 Berlin",
      room: "2Zi",
      price: "1.590 €"
    },{
      image:
        "https://pictures.immobilienscout24.de/listings/c7e8b81d-d951-4167-b7f9-7784369c4870-1508195504.jpg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "Wohnung für Interessenten,die Hand anlegen",
      address: "12459 Berlin",
      room: "3Zi",
      price: "613,33 €"
    },{
      image:
        "https://pictures.immobilienscout24.de/listings/031efc9d-9d04-48c2-8693-58c1b2712a15-1508203662.jpg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "Ollstuhlgerechte 2-Zimmer-Wohnung",
      address: "12107 Berlin",
      room: "2Zi",
      price: "959,62 € "
    },{
      image:
        "https://pictures.immobilienscout24.de/listings/aa94b0f5-6b9e-4245-b2da-8098e13a7faf-1508197941.jpeg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "Altbau Nähe Tempelhofer Hafen",
      address: "12099 Berlin",
      room: "4Zi",
      price: "2.412 € "
    },{
      image:
        "https://pictures.immobilienscout24.de/listings/1d93e091-0324-42ae-b816-f9c92dea9345-1508065319.jpg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "1-Zimmer-Wohnung lädt zum Entspannen ein!",
      address: "12689 Berlin",
      room: "1Zi",
      price: "487 €"
    },{
      image:
        "https://pictures.immobilienscout24.de/listings/f68270dd-fac1-4df3-b5a0-e70dfe4b5391-1502327743.jpg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "3 Zimmer Wohnung mit Balkon",
      address: "22083 Hamburg",
      room: "3Zi",
      price: "1.950 € "
    },
    {
      image:
        "https://pictures.immobilienscout24.de/listings/4a741a27-fb8d-4002-8f05-a48f70889737-1507977573.jpeg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "Stylisch Wohnen mitten in Eppendorf",
      address: "20251 Hamburg",
      room: "1Zi",
      price: "850 €"
    },
    {
      image:
        "https://pictures.immobilienscout24.de/listings/8283fe0a-e2c2-4e4c-b3c3-4960d82bea2f-1295816138.jpg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "STADTVILLA stilvolles Ambiente im Herzen",
      address: "22415 Hamburg",
      room: "3Zi",
      price: "1.500 €"
    },
    {
      image:
        "https://pictures.immobilienscout24.de/listings/965b9498-a778-46c4-baa7-2b096ba44510-1397230927.jpeg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "STACEY | Co-Living Mühlenkamp",
      address: "22301 Hamburg",
      room: "1Zi",
      price: "900 €"
    },
    {
      image:
        "https://pictures.immobilienscout24.de/listings/b1fe9f88-7250-4a6b-8b88-32455319479c-1447567057.jpg/ORIG/legacy_thumbnail/1024x768/format/webp/quality/73",
      text: "2 Zimmer, Einbauküche und Duschbad",
      address: "22307 Hamburg",
      room: "2Zi",
      price: "882,71 €"
    }
  ];
  
    return (<div
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
      <Carousel className="carouselcontainer"
      focusOnSelect={true}
      partialVisible={true}
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} 
      infinite={true}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={900}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      
      >
        {images.map((item, index) =>{
          return (
            <Card key={index} className="cardcontainer">
            <Card.Img variant="top" src={item.image} className="one" />
            <Card.Body >
              <Card.Title >{item.text} </Card.Title>
              <Card.Text className="two">
              {item.address}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="three">

            <span >{item.room}</span>

              <span>{item.price}</span>
            </Card.Footer>
          </Card>
          );
        })}
      </Carousel>
    );
}