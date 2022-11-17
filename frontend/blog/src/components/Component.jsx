import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../AppContext";
import axios from '../Axios';

function Component({ blogs }) {

    const [like, setLike] = useState(false);

    const userId = localStorage.getItem("userId");
    
   useEffect(()=>{
     blogs.likes?.forEach(user =>{
      if(user === userId){
          setLike(true);
       }
     })
   },[])
   function getlike(){
     axios.patch(`/blog/like/${blogs._id}/${userId}`).then((response) =>{
       if (response.data){
         setLike(true);
        //  setupdate();
     }
     })
   }
   function removelike(){
    axios.patch(`/blog/unlike/${blogs._id}/${userId}`).then((response) =>{
      if (response.data){
        setLike(false);
       //  setupdate();
    }
    })
  }
    return (
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
                 {like? (
                  
                  <i className="bi bi-hand-thumbs-up-fill" 
                   onClick={removelike}
                  ></i>
                ):
                <i className="bi bi-hand-thumbs-up" onClick={getlike}></i>
                } 

                    {/* <i class="bi bi-hand-thumbs-up-fill"></i> */}
                    {/* <Button variant="success">Like</Button>{' '} */}
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}

export default Component