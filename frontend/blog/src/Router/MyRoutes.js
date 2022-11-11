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

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Mynavbar/>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
           {/* <Route index element={<Home />} /> */}
           <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="Blogfeed" element={<Blogfeed />} />
          <Route path="Addblogpage" element={<Addblogpage />} />
          <Route path="Profilepage" element={<Profilepage />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* <Route path="addblog" element={<Addblog />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


