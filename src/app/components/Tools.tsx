import { tools } from "../constants/tools";
import Image from "next/image";

const Tools = () => {
  return (
    <div id="tools" className="bg-[#6d7f97] py-8 px-4 md:px-0">
      <div className="w-full md:w-[85%] mx-auto h-auto py-8">
        <ul className="flex items-center justify-center gap-8">
          {tools.map((tool, i) => (
            <li key={i}><Image  src={tool} alt="" width={48} height={48} /> </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tools;
