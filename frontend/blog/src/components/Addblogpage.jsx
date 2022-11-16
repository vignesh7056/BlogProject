import axios from "../Axios";
import React, { useState, useRef } from "react";

import { Form } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
function Addblogpage() {

  const titleRef = useRef();
  const bodyRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hit")
    const title = titleRef.current.value;
    const content = bodyRef.current.value;
    const username = localStorage.getItem("userName");
    console.log(content)
    if (title && content && username) {
      if (title !== "" && content !== "") {
        const data = {
          title, content, username
        };
console.log(data)
        axios({
          method: "post",
          url: "/blog/add",
        //  url: "/blog/create",
          data: data,
        }).then((response) => {
          if (response.data) {
            alert(" blog created");
            navigate("/Blogfeed");
          } else {
            alert("someting gone wrong");
            // blogError(true);
          }
        }).catch(err => {
          console.log(err)
        });
      } else {
        alert("please input fields");
      }
    }
  };
  return (
    <div>
      <div>Post blog</div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Title" required={true}
            ref={titleRef} />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">body</label>
          <textarea class="form-control" id="body" rows="3" required={true}
            ref={bodyRef}></textarea>
        </div>
        <div><button type="submit" className="btn btn-primary">
          POST
        </button></div>

      </form>
    </div>
    // <Card style={{ width: '80rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    //   <Card.Body>
    //     <Card.Title>Blog Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item>Name of author :</ListGroup.Item>
    //     <ListGroup.Item>Date :</ListGroup.Item>
    //     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    //   </ListGroup>
    //   <Card.Body>
    //   <Button variant="success">POST</Button>{' '}
    //   <Button variant="success">EDIT</Button>{' '}
    //   </Card.Body>
    // </Card>
  );
}

export default Addblogpage;