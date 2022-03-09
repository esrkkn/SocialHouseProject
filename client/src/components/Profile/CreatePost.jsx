import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreatePost.css";

function CreatePost() {
  return (
    <div className="container">
      <h2>Rent or sell your house!</h2>

      <Form>
        <FloatingLabel className="mb-3" controlId="form.title" label="Title">
          <Form.Control type="text" placeholder="Title" />
        </FloatingLabel>

        <Row>
          <Col>
            <FloatingLabel className="mb-3" controlId="form.location" label="Location">
              <Form.Control type="text" placeholder="Location" />
            </FloatingLabel>
          </Col>

          <Col>
            <FloatingLabel className="mb-3" controlId="form.rooms" label="Rooms">
              <Form.Control type="number" placeholder="Rooms" />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel controlId="form.description" label="Description">
          <Form.Control as="textarea" placeholder="Description" style={{ height: "250px" }} />
        </FloatingLabel>

        <Row className="m-18">
          <Col>
            <FloatingLabel className="mb-3" controlId="form.price" label="Price">
              <Form.Control type="number" placeholder="Price" />
            </FloatingLabel>
          </Col>

          <Col className="v-center">
            <Form.Group className="mb-3" controlId="form.rentOrSale">
              <Form.Check inline type="radio" name="rentOrSale" id="rent" label="for rent" />
              <Form.Check inline type="radio" name="rentOrSale" id="sale" label="for sale" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="form.image">
          <Form.Label>Add an image</Form.Label>
          <Form.Control type="file" accept="image/png, image/jpeg" />
        </Form.Group>

        <hr></hr>

        <div className="h-center">
          <Button variant="secondary" type="submit">
            Create Post
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreatePost;

// FORM WITH NO BOOTSTRAP //

/* <form action="" method="post">
  <div className="formRow">
    <label htmlFor="title">Title: </label>
    <input type="text" name="title" />
  </div>
  <div className="formRow">
    <label htmlFor="description">Description: </label>
    <textarea id="description" name="description" rows="10" cols="50"></textarea>
  </div>
  <div className="formRow">
    <label htmlFor="city">City: </label>
    <input type="text" name="city" />
  </div>
  <div className="formRow">
    <input type="radio" id="rent" name="rentOrSale" value="forRent" />
    <label htmlFor="rent">for Rent</label>
    <input type="radio" id="sale" name="rentOrSale" value="forSale" />
    <label htmlFor="sale">for Sale</label>
  </div>
  <div className="formRow">
    <label htmlFor="price">Price: </label>
    <input type="text" name="price" />
  </div>
  <div className="formRow">
    <input type="file" id="image" name="image" accept="image/png, image/jpeg" />
  </div>
  <div className="formRow">
    <input type="submit" value="Create Post" />
  </div>
</form>; */
