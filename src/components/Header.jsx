import React from "react";
import { Image } from "@mantine/core";

function Header() {
  return (
    <div className="flex space-between font-bold space-y-5 ml-px hover:bg-violet-600 pb-2.5 space-x-28 bg-amber-800 pb-5 w-screen items-center">
      <Image src="logo.png" w={100} />
      <a href="#home">Home</a>
      <br></br>
      <a href="#about">About</a>
      <br></br>
      <a href="#projects">Projects</a>
      <a href="#contacts">Contacts</a>
      <a href="#blog">Blog</a>
    </div>
  );
}
export default Header;


// flex space-between font-bold space-y-5 fixed  ml-px hover:bg-violet-600 pb-2.5 space-x-28 bg-amber-800 pb-5 w-screen top-0