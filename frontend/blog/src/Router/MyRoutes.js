import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from ".src/components/Layout";
 import Home from "../components/Home";
 import Blogfeed from "../components/Blogfeed";
// import NoPage from ".src/components/NoPage";
import Signin from "../components/Signin";
import SignUp from "../components/Signup";
import Addblogpage from "../components/Addblogpage";
import Profilepage from "../components/Profilepage";
import Mynavbar from "../components/Mynavbar";
import {useState} from "react";
import Editblogpage from "../components/Editblogpage";
import Clientpage from "../components/Clientpage";


export default function MyRoutes() {
const [refresh, setrefresh]= useState(false);

  return (
    <BrowserRouter>
      <Mynavbar/>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
           {/* <Route index element={<Home />} /> */}
           <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin setrefresh={() => setrefresh(!refresh)}/>} />
          <Route path="signup" element={<SignUp />} />
          <Route path="Blogfeed" element={<Blogfeed />} />
          <Route path="Addblogpage" element={<Addblogpage />} />
          <Route path="Profilepage" element={<Profilepage />} />
          <Route path="Admin" element={<Clientpage />} />
          <Route path="clientpage" element={<Clientpage />} />
           {/* <Route path="Editblogpage/:id" element={<Editblogpage />} />  */}
          <Route path="Editblogpage/:id" element={<Editblogpage />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* <Route path="addblog" element={<Addblog />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


