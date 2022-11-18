import axios from "../Axios";
import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Editblogpage(props) {
    const { id } = useParams();    
    const navigate= useNavigate();
    console.log(id);
    const [blog, setblog] = useState();
    const titleRef = useRef();
    const bodyRef = useRef();
    useEffect(() => {
        axios
            .get(`/blog/blogdata/id/${id}`)
            .then((response) =>{ setblog(response.data)
            console.log(response)})
            .catch((err) => console.log("error" + err))
       
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();

        const title = titleRef.current.value.trim();
        const content = bodyRef.current.value.trim();
        const _id = id;
        if (title && content) {
            const data = {
                _id,
                username: blog.username,
                title,
                content,
            };
            axios({
                method: "patch",
                url: '/blog/update',
                data: data,
            })
                .then((response) => {
                    if (response.data) {
                        alert("blog modified succesfully")
                        navigate("/Profilepage");
                    } else alert("error")
                })
                .catch((error) => console.log("error" + error));
        }
    }

    return (
        <>
            <div>
                <div>Post blog</div>
                <form className="form-container"
                    onSubmit={handleSubmit}
                >
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Title</label>
                        <input type="text" defaultValue={blog?.title} class="form-control" id="title" placeholder="Title" required={true}

                            ref={titleRef}

                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">body</label>
                        <textarea class="form-control" defaultValue={blog?.content} id="body" rows="3" required={true}
                            ref={bodyRef}

                        ></textarea>
                    </div>
                    <div><button type="submit" className="btn btn-primary">
                        POST
                    </button></div>

                </form>
            </div>
        </>
        
    );
}
export default Editblogpage;