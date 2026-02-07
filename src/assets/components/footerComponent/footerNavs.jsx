import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FtNavBtns from "./footerTab";

const FooterNavs = () => {
  return (
    <div className="mx-[80px] bg-gray-500 p-6 flex justify-between">

      <div className="grid grid-cols-2 gap-y-2 w-[30%]">
        {FtNavBtns.links.map((link, index) => (
          <h5 key={index} className="cursor-pointer hover:text-white">
            {link}
          </h5>
        ))}
      </div>

      
      <div className="flex flex-col items-start">
        <h3 className="mb-2">Follow Us</h3>
        <div className="flex space-x-4">
          {FtNavBtns.socials.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={icon} size="2x" />
          ))}
        </div>
      </div>

    </div>
  );
};

export default FooterNavs;

