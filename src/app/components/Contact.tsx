const Contact = () => {
  return (
    <div id="contact-me" className="py-8 px-4 md:px-0 w-full">
      <div className="w-full md:w-[85%] mx-auto my-0">
        <h2 className="font-bold text-white text-lg md:text-3xl">
          Interested in working with me?
        </h2>
        <p className="font-[400] text-[#999999] text-base md:text-lg w-auto md:w-96 pt-3">
          I'm active on all social media platforms listed below, but you can
          also send me an email and I will get back to you within 24-48 hours.
        </p>
        <a
          className="block mt-4 mx-0 mb-14 px-2 py-2 rounded w-36 text-center text-base md:text-lg font-[400] text-black bg-yellow-300 uppercase"
          href="mailto: david_umanah@yahoo.com"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default Contact;
