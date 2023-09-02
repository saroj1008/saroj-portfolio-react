import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiAngular,
  SiCss3,
  SiRedux,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-column gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILLS ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            {/* Add Node.js icon */}
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            {/* Add Angular icon */}
            <SiAngular />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            {/* Add CSS icon */}
            <SiCss3 />
          </span>
          <span className="bannerIcon">
            {/* Add Redux icon */}
            <SiRedux />
          </span>
          <span className="bannerIcon">
            {/* Add MongoDB icon */}
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            {/* Add SQL icon */}
            <SiMysql />
          </span>
        </div>
      </div>
      <div>
        {/* <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2> */}
        <div className="flex gap-4">
          
          {/* <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span> */}
          
        </div>
      </div>
    </div>
  );
};

export default Media;
