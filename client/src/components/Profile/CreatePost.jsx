import React from 'react';
import './CreatePost.css';

function CreatePost() {
  return (
    <div className="container">
      <form action="" method="post">
        <div className="formRow"><label htmlFor="title">Title: </label><input type="text" name="title" /></div>
        <div className="formRow"><label htmlFor="description">Description: </label><textarea id="description" name="description" rows="10" cols="50"></textarea></div>
        <div className="formRow"><label htmlFor="city">City: </label><input type="text" name="city" /></div>
        <div className="formRow">
          <input type="radio" id="rent" name="rentOrSale" value="forRent" />
          <label htmlFor="rent">for Rent</label>
          <input type="radio" id="sale" name="rentOrSale" value="forSale" />
          <label htmlFor="sale">for Sale</label>
        </div>
        <div className="formRow"><label htmlFor="price">Price: </label><input type="text" name="price" /></div>
        <div className="formRow"><input type="file" id="image" name="image" accept="image/png, image/jpeg" /></div>
        <div className="formRow"><input type="submit" value="Create Post" /></div>
      </form>
    </div>
  );
}

export default CreatePost;
