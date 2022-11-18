import axios from "../Axios";
import React, { useState, useRef } from "react";


import { Link, useNavigate } from "react-router-dom";
function Addblogpage() {

  const titleRef = useRef();
  const bodyRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
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

          data: data,
        }).then((response) => {
          if (response.data) {
            alert(" blog created");
            navigate("/Blogfeed");
          } else {
            alert("someting gone wrong");

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

  );
}

export default Addblogpage;
