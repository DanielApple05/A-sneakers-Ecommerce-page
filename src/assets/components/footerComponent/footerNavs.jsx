import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FtNavBtns from "./footerTab";

const FooterNavs = () => {
  return (

    <div className="bg-zinc-900 py-[50px] text-gray-400 ">
      <div className="border-b " >
        <div className=" flex justify-between px-[80px] pb-15">

          <div className="grid grid-cols-2 gap-y-6 gap-x-15">
            {FtNavBtns.links.map((link, index) => (
              <h5 key={index} className="cursor-pointer hover:text-white transition">
                {link}
              </h5>
            ))}
          </div>


          <div className="flex flex-col items-start">
            <h3 className="mb-4 font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {FtNavBtns.socials.map((icon, index) => (
                <FontAwesomeIcon key={index} icon={icon} size="2x" className="cursor-pointer hover:text-white transition" />
              ))}
            </div>
          </div>

          <div className=" grid w-[30%] ">
            <h3>
              Subscribe To Our Newsletter
            </h3>
            <div className="flex items-center bg-white rounded overflow-hidden  mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 py-3 px-4 outline-none text-sm"
              />

              <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 text-sm font-semibold tracking-wide transition">
                Subscribe
              </button>
            </div>


            <div className="flex gap-x-3 " >
              {
                FtNavBtns.cards.map((card, index) => (
                  <img key={card} src={card} alt="" className="w-[100px] h-[50px] bg-white rounded " />
                ))
              }
            </div>
          </div>

        </div>

      </div>

     <div>
       <div className="px-[80px] tracking-widest] py-4" >
        <h3>2026 <span className="text-red-400">SneakerShop.</span> All Rights Reserved</h3>
      </div>



     </div>

    </div>
  );
};

export default FooterNavs;

