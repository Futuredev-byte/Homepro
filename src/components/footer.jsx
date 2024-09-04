import React from "react";
import ComponentWrapper from "../components/resusables/ComponentWrapper";
import homepro from "../assets/Icons/homepro.png";
import { Link } from "react-router-dom";
import img1 from '../assets/Icons/Frame 106.png'
import img2 from '../assets/Icons/Frame 105.png'
import img3 from '../assets/Icons/Frame 104.png'

const Footer = () => {
  return (
    <div className="w-full h-auto md:h-[351px] bg-dark">
      <ComponentWrapper className="bg-dark h-[159px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 bg-dark">
          <div className="h-full bg-inherit">
            <div className="bg-inherit flex flex-col">
              <Link to="/" className="bg-inherit">
                <div className="bg-inherit flex items-baseline">
                  <img src={homepro} alt="logo" className="bg-inherit" />
                  <span className="font-pacifico  text-color-text bg-inherit">
                    HomePro
                  </span>
                </div>
              </Link>
              <p className="text-sm bg-inherit text-slate-300">
              Best place to find properties
              </p>
              <small className="text-sm bg-inherit text-slate-300">
              that suits your person.
              </small>
              <div className="flex items-center space-x-3">
              <img src={img1} alt="" className="h-[24px] w-[24px] mt-2"/>
              <img src={img2} alt="" className="h-[24px] w-[24px] mt-2"/>
              <img src={img3} alt="" className="h-[24px] w-[24px] mt-2"/>
              </div>         
            </div>
          </div>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-inherit g-4">
            <div className="h-full bg-inherit w-[90%]">
              <div className="bg-inherit flex flex-col">
                <small className="text-xs bg-inherit text-slate-400">
                  About Us
                </small>
                <small className="text-xs bg-inherit text-slate-400 mt-3">
                  Contact Information
                </small>
              </div>
            </div>
            <div className="h-full bg-inherit w-[90%]">
              <div className="bg-inherit flex flex-col ">
                <p className="text-xs bg-inherit text-slate-400">
                  Privacy Policy
                </p>
                <small className="text-xs bg-inherit text-slate-400 mt-3">
                  Terms of service
                </small>
              </div>
            </div>
          </div>
          <div className="h-full bg-inherit w-full flex ">
            <form action="" className="bg-inherit w-11/12 mx-auto">
            <p className="text-white font-semibold">Subscribe to Our Newsletter for latest updates</p>
            <div className="flex items-center mt-9">
            <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-inherit  px-4 py-2 text-sm border border-slate-300 rounded-tl-md rounded-bl-md focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-[50%] px-4 py-2 text-sm bg-color-text text-white rounded-br-md rounded-tr-md hover:bg-secondary hover:text-primary hover:border-primary"
              >
                Submit
              </button>
            </div>
             
            </form>
          </div>
        </div>
      </ComponentWrapper>
      <div className="w-full bg-inherit border-t border-t-slate-400 text-sm pt-6 mt-8">
        <div className="bg-inherit flex flex-col justify-center items-center">
          <p className="text-center text-sm bg-inherit text-slate-300">
            Copyright@2024 | All rights reserved.
          </p>
          <small className="text-center text-xs bg-inherit text-slate-400">
            DesignedbyMaryam | codedby@Femi
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;