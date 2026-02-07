import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FtNavBtns from "./footerTab";

const FooterNavs = () => {
  return (

    <div className="bg-black py-[50px] ">
      <div className="border-b text-gray-400" >
        <div className=" flex justify-between px-[80px] pb-15">

          <div className="grid grid-cols-2 gap-y-6 gap-x-15">
            {FtNavBtns.links.map((link, index) => (
              <h5 key={index} className="cursor-pointer hover:text-white">
                {link}
              </h5>
            ))}
          </div>


          <div className="flex flex-col items-start">
            <h3 className="mb-4 font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {FtNavBtns.socials.map((icon, index) => (
                <FontAwesomeIcon key={index} icon={icon} size="2x" />
              ))}
            </div>
          </div>

          <div>
            <h3>
              Subscribe To Our Newsletter
            </h3>
            <div className="flex bg-white">
              <input type="email" placeholder="Email address" className="py-3 px-2 border" />
              <button className="bg-red-700 px-3 tracking-widest py-3 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FooterNavs;

