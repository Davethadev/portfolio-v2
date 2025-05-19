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
        <div id="logo" className="font-archivo font-normal text-white text-lg">
          DUO
        </div>
        <button onClick={openMobileNav} className="md:hidden">
          <Menu strokeWidth={1.5} color="white" />
        </button>
        <div className="hidden md:flex items-center gap-4">
          {/* <a href="#">Articles</a> */}
          <a
            className="font-archivo font-normal text-base text-[#999999] hover:text-white transition-all 500ms ease-in-out"
            href="#work"
            onClick={closeMobileNav}
          >
            Work
          </a>
          <a
            className="font-archivo font-normal text-base text-[#999999] hover:text-white transition-all 500ms ease-in-out"
            href="#about"
            onClick={closeMobileNav}
          >
            About
          </a>
          <a
            className="font-archivo font-normal text-base text-[#999999] hover:text-white transition-all 500ms ease-in-out"
            href="#contact-me"
            onClick={closeMobileNav}
          >
            Contact
          </a>
        </div>
        <a
          className="w-fit text-center font-archivo font-normal py-1.5 px-4 text-black bg-yellow-300 hover:bg-black hover:text-white text-sm rounded hidden md:block uppercase transition-all 500ms ease-in-out"
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
          <button className="font-archivo font-normal uppercase text-white mt-16 mx-auto text-center block">
            Work
          </button>
          <button className="font-archivo font-normal uppercase text-white mt-4 mx-auto text-center block">
            About
          </button>
          <button className=".font-archivo font-normal transition-all 500ms ease-in-out uppercase text-white mt-4 mx-auto text-center block">
            Contact
          </button>
          <Link
            className="font-archivo font-normal w-fit mx-auto text-center py-1.5 px-4 text-black bg-yellow-300 hover:bg-black hover:text-white text-sm rounded mt-4 uppercase block transition-all 500ms ease-in-out"
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
