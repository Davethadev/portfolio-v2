import Image from "next/image";

const Works = () => {
  return (
    <div id="work" className="pb-14 px-0 pt-8">
      <h2 className="text-center font-[400] text-2xl md:text-4xl text-white py-16">
        These are some of my projects
      </h2>
      <div className="w-full md:w-[85%] my-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        <div className="w-full">
          <Image
            src={"/sarepay.png"}
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
          <a
            className="block font-[400] text-white text-xl md:text-2xl py-2"
            href="https://sarepay-app.netlify.app/"
          >
            Sarepay
          </a>
          <p className="font-[400] text-[#999999] px-0 pb-14 text-base md:text-lg">
            Sarepay is a financial dashboard tailored for businesses. It
            provides functionalities such as tracking balances, managing
            disbursements and collections, overseeing e-commerce transactions,
            handling loans, and maintaining employee records, all within a
            centralized platform.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/thenesthr.png"}
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
          <a
            className="block font-[400] text-white text-xl md:text-2xl py-2"
            href="https://thenesthr.netlify.app/"
          >
            TheNestHR
          </a>
          <p className="font-[400] text-[#999999] px-0 pb-14 text-base md:text-lg">
            A full-featured HR management system designed to streamline employee
            onboarding, payroll, leave requests, and performance tracking.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/inspectorpro.png"}
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
          <a
            className="block font-[400] text-white text-xl md:text-2xl py-2"
            href="https://inspectorpro.netlify.app/"
          >
            InspectorPro
          </a>
          <p className="font-[400] text-[#999999] px-0 pb-14 text-base md:text-lg">
            A property inspection platform enabling users to schedule, track,
            and report inspections.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/mlogistics.png"}
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
          <a
            className="block font-[400] text-white text-xl md:text-2xl py-2"
            href="https://mlogistics-app-v2.netlify.app/"
          >
            Mlogistics
          </a>
          <p className="font-[400] text-[#999999] px-0 pb-14 text-base md:text-lg">
            Mlogistics is a logistics management application designed to
            streamline the delivery of goods by connecting customers with local
            businesses and riders.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/annabel-portfolio-website.png"}
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
          <a
            className="block font-[400] text-white text-xl md:text-2xl py-2"
            href="https://annabel-anthony.vercel.app/"
          >
            Annabel's Portfolio Website
          </a>
          <p className="font-[400] text-[#999999] px-0 pb-14 text-base md:text-lg">
            This is the personal portfolio of Annabel Anthony, a UI/UX designer
            based in Lagos, Nigeria. The site showcases her design projects,
            including QR Pass, Spenda, Kukusend, and Ridepay, highlighting her
            skills in creating user-centric digital solutions.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/spenda.png"}
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
          <a
            className="block font-[400] text-white text-xl md:text-2xl py-2"
            href="https://spenda.ng/"
          >
            Spenda
          </a>
          <p className="font-[400] text-[#999999] px-0 pb-14 text-base md:text-lg">
            Spenda is an intuitive expense tracking platform designed to help
            users manage their finances effectively. With a user-friendly
            interface, it allows for easy logging of expenses, providing
            insights into spending habits and aiding in financial planning.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/ridepay.png"}
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
          <a
            className="block font-[400] text-white text-xl md:text-2xl py-2"
            href="https://ridepay.ng/"
          >
            Ridepay
          </a>
          <p className="font-[400] text-[#999999] px-0 pb-14 text-base md:text-lg">
            Ridepay is a mobile application that streamlines ride fare payments.
            Passengers can effortlessly settle fares by entering the driver's
            unique four-digit code, ensuring secure and instant transactions.
            The app also offers offline payment capabilities and loan options
            for added convenience.
          </p>
        </div>
        <div className="w-full">
          <Image
            src={"/easybank-landing-page.png"}
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
          <a
            className="block font-[400] text-white text-xl md:text-2xl py-2"
            href="https://davethadev.github.io/easybank-landing-page/"
          >
            Easybank landing page
          </a>
          <p className="font-[400] text-[#999999] px-0 pb-14 text-base md:text-lg">
            A landing page design from{" "}
            <a
              className="text-base text-white"
              href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
            >
              frontendmentor
            </a>{" "}
            for a website that lets you manage your finances online as well as
            budget, save, invest and much more.
          </p>
        </div>
        <div className="w-full">
          <img
            src={"/loopstudios-landing-page.png"}
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
          <a
            className="block font-[400] text-white text-xl md:text-2xl py-2"
            href="https://davethadev.github.io/loopstudios-landing-page/"
          >
            Loopstudios landing page
          </a>
          <p className="font-[400] text-[#999999] px-0 pb-14 text-base md:text-lg">
            Another design from{" "}
            <a
              className="text-base text-white"
              href="https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw"
            >
              frontendmentor
            </a>{" "}
            for a website that delivers immersive experiences by producing
            world-class virtual reality projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
