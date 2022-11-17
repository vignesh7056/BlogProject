import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../AppContext";

import axios from "../Axios";
import Component from './Component';
function Blogfeed() {
  const [blog, setblogs] = useState([]);
  // const [like, setlike] = useState(false);
  // useEffect(()=>{
  //   data.likes.forEach(user =>{
  //     if(user === userId){
  //        setlike(true);
  //     }
  //   })
  // },[])
  // function getlike(){
  //   axios.patch('/blog/like/${data.id}/${userId}').then((response) =>{
  //     if (response.data){
  //       setlike(true);
  //       setupdate()
  //   }
  //   })
  // }

  useEffect(() => {
    axios
      .get("/blog")
      .then((response) => setblogs(response.data.reverse()))
      .catch((err) => console.log("Error " + err));
  }, []);
  // const bloglike =({data}) => {
  //   const[like, setlike]= useState(data.like);
  //   function changelike(){
  //     setlike(!like);
  //   }
  // }



  return (

    <div className="cards-container">
      {blog.map((blogs) => {
        return (<Component blogs={blogs} />);
      })}
    </div>

  );

}

export default Blogfeed;