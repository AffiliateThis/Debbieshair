import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";

const App = () => (
  <UnderConstruction
    background={{
      image: "https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg",
      textColor: "#fff",
      overlay: {
        color: "#000",
        opacity: ".5"
      }
    }}
    logo={{
      src: "",
      alt: "alt text"
    }}
    title={{
      className:"Title",
      text: "The Hair Studios",
      
    }}
    description={{
      text:
        "Our website is under construction. We will soon be live.  Check back for details",
      style: {
        maxWidth: "440px"
      }
    }}
    // subscribe={{
    //   placeholder: 'Enter your email',
    //   buttonText: 'Subscribe',
    //   onSubmit: (value) => {
    //     console.log('user typed email :', value);
    //   }
    // }}
  />
);

export default App;
