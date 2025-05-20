"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        {/* <div >
          <a href="#">Articles</a>
        </div> */}
        <ul className="hidden md:flex items-center gap-6 desktop-nav">
          <li className="space-y-0.5">
            <a
              className="font-archivo font-normal text-base text-white transition-all 500ms ease-in-out block"
              href="#work"
              onClick={closeMobileNav}
            >
              Work
            </a>
            <span className="h-0.25 bg-white w-0 block"></span>
          </li>
          {/* <li className="space-y-0.5">
            <a
              className="font-archivo font-normal text-base text-white transition-all 500ms ease-in-out block"
              href="#about"
              onClick={closeMobileNav}
            >
              About
            </a>
            <span className="h-0.25 bg-white w-0 block"></span>
          </li> */}
          <li className="space-y-0.5">
            <a
              className="font-archivo font-normal text-base text-white transition-all 500ms ease-in-out block"
              href="#contact-me"
              onClick={closeMobileNav}
            >
              Contact
            </a>
            <span className="h-0.25 bg-white w-0 block"></span>
          </li>
        </ul>
        <a
          className="w-fit text-center font-archivo font-normal py-1.5 px-4 text-black bg-yellow-300 hover:bg-black hover:text-white text-sm rounded hidden md:block uppercase transition-all 500ms ease-in-out"
          href="mailto: david_umanah@yahoo.com"
        >
          Get in touch
        </a>
      </div>
      <AnimatePresence>
        {isMobileNav && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { ease: "easeInOut", duration: 0.25, type: "spring" },
            }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden w-[90%] mx-auto pt-4 pb-16 px-0 absolute top-16 right-0 left-0 text-center z-10 bg-black h-auto rounded-sm"
          >
            <button
              className="md:hidden absolute right-8"
              onClick={closeMobileNav}
            >
              <X strokeWidth={1.5} color="white" />
            </button>
            {/* <a href="#">Articles</a> */}
            <a
              href="#work"
              onClick={closeMobileNav}
              className="font-archivo font-normal uppercase text-white mt-16 mx-auto text-center block"
            >
              Work
            </a>
            {/* <a href="" className="font-archivo font-normal uppercase text-white mt-4 mx-auto text-center block">
            About
          </a> */}
            <a
              href="#contact-me"
              onClick={closeMobileNav}
              className=".font-archivo font-normal transition-all 500ms ease-in-out uppercase text-white mt-4 mx-auto text-center block"
            >
              Contact
            </a>
            <Link
              className="font-archivo font-normal w-fit mx-auto text-center py-1.5 px-4 text-black bg-yellow-300 hover:bg-black hover:text-white text-sm rounded mt-4 uppercase block transition-all 500ms ease-in-out"
              href="mailto: david_umanah@yahoo.com"
            >
              Get in touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
