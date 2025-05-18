import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full md:w-[85%] my-0 mx-auto md:flex justify-between items-center pt-14 px-4 md:px-0">
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
        <h1 className="font-bold text-white text-2xl md:text-5xl leading-snug pt-12 md:pt-0">
          Helping you build beautiful and interactive websites.
        </h1>
        <p className="font-[400] text-[#999999] pt-4 text-base md:text-xl">
          Fullstack Web Developer with a frontend focus, building responsive,
          performant interfaces with React and Next.js, and integrating powerful
          backend systems using Node.js, Express, and MongoDB.
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
