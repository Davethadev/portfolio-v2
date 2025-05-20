import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="w-full md:w-[85%] my-0 mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <div className="font-archivo font-normal text-white text-base">DUO</div>
        <div className="flex items-center gap-4">
          <a className="block text-xl" href="https://github.com/Davethadev" target="_blank">
            <Image src='/github-brands-white.svg' alt="" width={18} height={18} />
          </a>
          <a className="block text-xl" href="https://linkedin.com/in/david-umanah-364a2924b" target="_blank">
            <Image src='/linkedin-brands.svg' alt="" width={18} height={18} />
          </a>
          {/* <a
            className="block text-xl"
            href="https://mobile.twitter.com/_callmedaveed"
          >
            <Image src='/x-twitter-brands.svg' alt="" width={18} height={18} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
