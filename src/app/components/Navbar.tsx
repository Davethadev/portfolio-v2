"use client";

import Link from "next/link";
import { useState } from "react";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const openMobileNav = () => {
    setIsMobileNav(true);
  };

  const closeMobileNav = () => {
    setIsMobileNav(false);
  };

  return (
    <>
      <div className="w-full md:w-[85%] mx-auto my-0 flex justify-between items-center pt-8 px-4 md:px-0">
        <div id="logo" className="font-[400] text-white text-base">
          David Umanah
        </div>
        <button onClick={openMobileNav} className="md:hidden">
          <Menu strokeWidth={1.5} color="white" />
        </button>
        <div className="hidden md:block">
          {/* <a href="#">Articles</a> */}
          <a
            className="font-[400] text-[rgb(153,153,153)] text-lg ml-4"
            href="#work"
            onClick={closeMobileNav}
          >
            Work
          </a>
          <a
            className="font-[400] text-[#999999] text-lg ml-4"
            href="#about"
            onClick={closeMobileNav}
          >
            About
          </a>
          <a
            className="font-[400] text-[#999999] text-lg ml-4"
            href="#contact-me"
            onClick={closeMobileNav}
          >
            Contact
          </a>
        </div>
        <a
          className="w-fit text-center font-[400] py-1 px-4 text-black bg-yellow-300 text-lg rounded hidden md:block uppercase"
          href="mailto: david_umanah@yahoo.com"
        >
          Get in touch
        </a>
      </div>

      {isMobileNav && (
        <div className="md:hidden w-full text-center py-8 px-0 absolute top-0 z-10 bg-black h-screen overflow-y-clip">
          <button className="md:hidden absolute right-8" onClick={closeMobileNav}>
            <X strokeWidth={1.5} color="white" />
          </button>
          {/* <a href="#">Articles</a> */}
          <button className="uppercase text-white mt-16 flex justify-center w-full">
            Work
          </button>
          <button className="uppercase text-white mt-4 flex justify-center w-full">
            About
          </button>
          <button className="uppercase text-white mt-4 flex justify-center w-full">
            Contact
          </button>
          <Link
            className="w-fit mx-auto text-center font-[400] py-1 px-4 text-black bg-yellow-300 text-base rounded mt-4 uppercase block"
            href="mailto: david_umanah@yahoo.com"
          >
            Get in touch
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
