import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./home";
import Blog from "./blog";
import Contact from "./contact";
import About from "./about";
import { Exercise } from "./exercise";
import { User } from "./user";
import 'bootstrap/dist/css/bootstrap.min.css';
import Delivery from "./delivery";
import Meme from "./meme";
import Phone from "./phones";
import Rest from "./rest";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  history;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/meme" element={<Meme />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/rest" element={<Rest />} />
        </Routes>
      </BrowserRouter>

      {/*<Home data="home" />
      <Blog />
      <Home data="about"/>
      <Home data="contact"/>
      <Home data="blog"/> */}
    </>
  );
}

export default App;
