import { React, useState, useContext } from "react";
import { SocialHouseContext } from "../../Context";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreatePost.css";

function CreatePost() {


  const [newPost, setNewPost] = useState({
    title: "",
    location: "",
    rooms: "",
    description: "",
    price: "",
    service: "",
    image: "",
  });
  
  const { userData } = useContext(SocialHouseContext);

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("saved");

    const data = {
      owner: userData._id,
      ...newPost
    };

    console.log("Home: handleSave: data is", data);
    const response = await axios.post("/posts/add", data);

    console.log("save post: response is", response);

    
    console.log("Post is:", newPost);

  };

  return (
    <div className="container">
      <h2>Rent or sell your house!</h2>

      <Form>
        <FloatingLabel className="mb-3" controlId="form.title" label="Title">
          <Form.Control
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
        </FloatingLabel>

        <Row>
          <Col>
            <FloatingLabel className="mb-3" controlId="form.location" label="Location">
              <Form.Control
                type="text"
                placeholder="Location"
                value={newPost.location}
                onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
              />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel className="mb-3" controlId="form.rooms" label="Rooms">
              <Form.Control
                type="number"
                placeholder="Rooms"
                value={newPost.rooms}
                onChange={(e) => setNewPost({ ...newPost, rooms: e.target.value })}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel controlId="form.description" label="Description">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: "250px" }}
            value={newPost.description}
            onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
          />
        </FloatingLabel>

        <Row className="m-18">
          <Col>
            <FloatingLabel className="mb-3" controlId="form.price" label="Price">
              <Form.Control
                type="number"
                placeholder="Price"
                value={newPost.price}
                onChange={(e) => setNewPost({ ...newPost, price: e.target.value })}
              />
            </FloatingLabel>
          </Col>

          <Col className="v-center">
            <Form.Group className="mb-3" controlId="form.rentOrSale">
              <Form.Check inline type="radio" name="rentOrSale" id="rent" label="for rent" value="rent" onChange={(e) => setNewPost({ ...newPost, service: e.target.value })} />
              <Form.Check inline type="radio" name="rentOrSale" id="sale" label="for sale" value="sale" onChange={(e) => setNewPost({ ...newPost, service: e.target.value })}/>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="form.image">
          <Form.Label>Add an image</Form.Label>
          <Form.Control type="file" accept="image/png, image/jpeg" />
        </Form.Group>

        <hr></hr>

        <div className="h-center">
          <Button variant="secondary" type="submit" onClick={handleSave}>
            Create Post
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreatePost;


