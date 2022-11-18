
import React, { useContext, useEffect, useRef, useState } from "react";


import axios from "../Axios";
import Blogfeedcomponent from './Blogfeedcomponent';
function Blogfeed() {
  const [blog, setblogs] = useState([]);
 
  useEffect(() => {
    axios
      .get("/blog")
      .then((response) => setblogs(response.data.reverse()))
      .catch((err) => console.log("Error " + err));
  }, []);
  
  return (

    <div className="cards-container">
      {blog.map((blogs) => {
        return (<Blogfeedcomponent blogs={blogs} />);
      })}
    </div>

  );

}

export default Blogfeed;