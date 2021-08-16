import React from 'react';
 import {Link} from "react-router-dom";
 //client side routing


function Footer() {
  return(
    <footer className="border-top text-center small text-muted py-3">
       <p>
      <Link to="/" className="mx-1">
        Home
      </Link>{" "}
      |{" "}
      <Link className="mx-1" to="/about-us">
        About Us
      </Link>{" "}
      |{" "}
       <a  className="mx-1" href="/disclaimer">
        Disclaimer
        </a> 
    </p>
    <p className="m-0">
      Copyright &copy; 2021{" "}
      <a href="/" className="text-muted">
        ComplexApp
      </a>
      . All rights reserved.
    </p>
    </footer>
  )
}

export default Footer
    
    //   {/* Server side Routing for navigation */}
    // {/* <p>
    //   <a href="/" className="mx-1">
    //     Home
    //   </a>{" "}
    //   |{" "}
    //   <a className="mx-1" href="/about-us">
    //     About Us
    //   </a>{" "}
    //   |{" "}
    //   <a className="mx-1" href="/disclaimer">
    //     Disclaimer
    //   </a>
    // </p>
    // <p className="m-0">
    //   Copyright &copy; 2021{" "}
    //   <a href="/" className="text-muted">
    //     ComplexApp
    //   </a>
    //   . All rights reserved.
    // </p> */}
 