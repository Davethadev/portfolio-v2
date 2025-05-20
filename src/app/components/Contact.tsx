const Contact = () => {
  return (
    <div id="contact-me" className="py-8 px-4 md:px-0 w-full bg-[#6d7f97]">
      <div className="w-full md:w-[85%] mx-auto my-0">
        <h2 className="font-archivo font-semibold text-white text-lg md:text-3xl">
          Interested in working with me?
        </h2>
        <p className="font-archivo font-normal text-white text-sm md:text-base w-auto md:w-96 pt-3">
          I&apos;m active on all social media platforms listed below, but you can
          also send me an email and I will get back to you within 24-48 hours.
        </p>
        <a
          className="block mt-4 mx-0 px-2 py-2 rounded w-36 text-center text-sm font-archivo font-normal text-black bg-yellow-300 hover:bg-black hover:text-white md:block uppercase transition-all 500ms ease-in-out"
          href="mailto:david_umanah@yahoo.com"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default Contact;
