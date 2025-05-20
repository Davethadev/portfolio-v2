import WorkCard from "./WorkCard";
import { works } from "../constants/works";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Works = () => {
  return (
    <div id="work" className="pb-14 px-0 pt-8 w-full">
      <h2 className="text-center font-archivo font-semibold text-2xl md:text-4xl text-white py-16">
        These are some of my projects
      </h2>
      {/* <Tabs defaultValue="web apps" className="w-40 mx-auto bg-[#11191d]">
        <TabsList>
          <TabsTrigger
            value="web apps"
            className="font-archivo font-medium text-sm"
          >
            Web Applications
          </TabsTrigger>
          <TabsTrigger
            value="landing pages"
            className="font-archivo font-medium text-sm"
          >
            Landing Pages
          </TabsTrigger>
          <TabsTrigger
            value="apis"
            className="font-archivo font-medium text-sm"
          >
            APIs
          </TabsTrigger>
        </TabsList>
        
        
      </Tabs> */}
      <div className="w-full md:w-[85%] my-0 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {works.map((item, i) => {
          const { img, title, desc, href } = item;
          return (
            <WorkCard key={i} img={img} title={title} desc={desc} href={href} />
          );
        })}
      </div>
    </div>
  );
};

export default Works;
