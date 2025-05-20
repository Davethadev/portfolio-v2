"use client";
import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

type WorkCardProps = {
  img: string;
  title: string;
  desc: string | Element | ReactNode;
  href: string;
};

export function WorkCard ({ img, title, desc, href }: WorkCardProps) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 2 }}
      transition={{ ease: "easeInOut", duration: 1, type: "spring" }}
      // exit={{ y: 10, opacity: 0 }}
      className="w-full bg-[#11191d] rounded-xl px-8 py-8 space-y-4 relative"
    >
      <Image
        src={img}
        alt=""
        width={400}
        height={400}
        className="w-full rounded-xl"
      />
      <div className="h-54 relative w-full">
        <h2 className="font-archivo font-medium text-white tracking-wider text-sm md:text-xl">
          {title}
        </h2>
        <p className="font-archivo font-normal text-[#999999] text-sm md:text-base">
          {desc as ReactNode}
        </p>
        <div className="flex items-center justify-between absolute bottom-0 w-full">
          {/* <a href="" className="">
            <Image
              src={"/github-brands-white.svg"}
              alt=""
              width={24}
              height={24}
              className=""
            />
          </a> */}
          <a
            href={href}
            className="font-archivo font-medium text-sm md:text-base text-white w-full rounded-lg flex items-center justify-end gap-2 view-live-btn"
            target="_blank"
          >
            {title === "Blog API" || title === "Course Allocation System API"
              ? "Github Url"
              : "View live"}{" "}
            <span>
              <MoveRight strokeWidth={1.5} color="white" />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// export default WorkCard;
