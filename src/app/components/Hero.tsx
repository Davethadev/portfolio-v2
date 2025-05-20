import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] md:w-[85%] my-0 mx-auto md:flex justify-between items-center pt-8 px-4 md:px-0">
      <div className="md:hidden">
        <Image
          src={"/nicer-avatar.png"}
          alt=""
          width={398}
          height={398}
          className=""
        />
      </div>
      <div className="w-full md:w-[60%]">
        <h1 className="font-archivo font-semibold text-white text-2xl md:text-5xl leading-8 md:leading-14 pt-12 md:pt-0">
          Design. Code. Deploy. Repeat.
        </h1>
        {/* <h3 className="font-archivo font-semibold text-white text-lg md:text-xl leading-8 md:leading-14 md:pt-0">(Frontend to backend, I&apos;ve got it covered.)</h3> */}
        <p className="font-archivo font-normal text-[#999999] pt-1 text-sm md:text-base">
          Full-Stack Developer proficient in building scalable web applications
          using React, Next.js, Node.js, and Express. Experienced in integrating
          RESTful APIs, managing databases, and implementing secure
          authentication systems.
        </p>
      </div>
      <div className="hidden md:block">
        <Image
          src={"/nicer-avatar.png"}
          alt=""
          width={398}
          height={398}
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
