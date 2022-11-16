import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../AppContext";

import axios from "../Axios";
function Blogfeed() {
  const [blog, setblogs] = useState([]);

  
  useEffect(() => {
    axios
      .get("/blog")
      .then((response) => setblogs(response.data.reverse()))
      .catch((err) => console.log("Error " + err));
  },[]);



  return (
   
       <div className="cards-container">
        {blog.map((blogs) => {
          
          return (<> 
          <ListGroup.Item>
            <Card style={{ width: '80rem' }}>
             
              <Card.Body>
                <Card.Title>{blogs.title}</Card.Title>
                <Card.Text>
                  {blogs.content}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>author :{blogs.username}</ListGroup.Item>
                <ListGroup.Item>Date :{blogs.date}</ListGroup.Item> 
              </ListGroup>
              <Card.Body>
              <Button variant="success">Like</Button>{' '}
              </Card.Body>
            </Card>
            </ListGroup.Item>
            
             </>);
        })}
      </div>
  
  );
  
}

export default Blogfeed;