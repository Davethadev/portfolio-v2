import { WorkCard } from "./WorkCard";
import { works } from "../constants/works";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Works = () => {
  return (
    <div id="work" className="pb-14 px-0 pt-8 w-full space-y-6">
      <h2 className="text-center font-archivo font-semibold text-2xl md:text-4xl text-white pt-16 pb-4">
        These are some of my projects
      </h2>
      <p className="text-sm text-[#999] text-center italic">
        ⚠️ Note: Most of the web apps shown below may have
        limited functionality as their backend servers are currently offline or
        running on local environments.
      </p>
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
