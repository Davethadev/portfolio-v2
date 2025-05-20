import WorkCard from "./WorkCard";
import { works } from "../constants/works";

const Works = () => {
  return (
    <div id="work" className="pb-14 px-0 pt-8">
      <h2 className="text-center font-archivo font-semibold text-2xl md:text-4xl text-white py-16">
        These are some of my projects
      </h2>
      <div className="w-full md:w-[85%] my-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {works.map((work, i) => {
          const { img, title, desc, href } = work;
          return (
            <WorkCard key={i} img={img} title={title} desc={desc} href={href} />
          );
        })}
      </div>
    </div>
  );
};

export default Works;
