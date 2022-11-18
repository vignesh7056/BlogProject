import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from '../Axios';
import { useState } from 'react';
function Profilepage() {
  const [blog, setblogs] = useState([]);
  const username = localStorage.getItem("userName");
 const [refresh, setrefresh] = useState(false);
  useEffect(() => { 
    axios
      .get(`/blog/${username}`)
      .then((response) => setblogs(response.data.reverse()))
      .catch((err) => console.log("Error " + err));
      console.log(blog);
  },[refresh]);
  const navigate = useNavigate();
  const edit = (id) => {
    navigate(`/Editblogpage/${id}`);
  };
  const del = (id) => {
    axios.delete(`/blog/id/${id}`).then((response) => setrefresh(true))
  }
  return (
    <>
   <Link to={`/Addblogpage`}> <Button variant="success">POST BLOG</Button>{' '}</Link>
    <>
    
    </>
      {blog.map((blogs) => {
        return (
          <>
           
            <ListGroup>
              <ListGroup.Item>
                <Card style={{ width: '80rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Body>
                    <Card.Title>{blogs.title}</Card.Title>
                    <Card.Text>
                    {blogs.content}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>author :{blogs.username}</ListGroup.Item>
                    <ListGroup.Item>Date : {blogs.date}</ListGroup.Item>
                    <ListGroup.Item>Id : {blogs._id}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                   {console.log(blogs._id,"////if")}
                    <Button variant="success"onClick={() => del(blogs._id)}>DELETE</Button>{' '}
                    <Button variant="success"onClick={() => edit(blogs._id)}>EDIT</Button>{' '}
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            </ListGroup>
          </>)
      })}
    </>
  )
}
export default Profilepage;
