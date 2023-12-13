import React from "react";
import { Image } from "@mantine/core";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex font-bold space-y-5 ml-px  bg-lime-500 pb-5 w-screen items-center border-4 rounded-lg ">
      <Image src="logo.png" w={100} />
      {/* bg-lime-500 */}
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            {/* <li>
              <Link to="/blog">Blog</Link>
            </li> */}

            <li>
              <Link to="/contacts">Contact Us</Link>
            </li>

            <li>
              <Link to="/requestappointment">Request Appointment</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;
