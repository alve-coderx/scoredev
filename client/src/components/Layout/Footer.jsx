import React from "react";
import insta from "../../assets/insta.svg";
import {
  Facebook,
  Instagram,
  Telegram,
  Twiter,
  UnknowM,
  Youtube,
} from "../../assets/SvgExporter";
const FooterHead = () => {
  return (
    <div className="bg-[#1F1F1F] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-10">
      <div className="text-white">
        <p className="text-secondary text-xs">SPECIAL OFFER</p>
        <p className="text-3xl font-[900] ">Sign up for 15% off!</p>
        <p className="text-[#cccccc] text-sm font-[600]">
          Sign up for our emails to get 15% off your purchase & first access to
          new products & giveaways. Sign Up
        </p>
      </div>
      <div className="text-white">
        <p className="text-[#cccccc] text-sm font-[600]">INFO</p>
        <p>About us</p>
        <p>Careers</p>
        <p>Dealer Registration</p>
        <p>Affiliate Program</p>
        <p className="text-[#cccccc] text-sm font-[600]">+ View More</p>
      </div>
      <div className="text-white">
        <p className="text-[#cccccc] text-sm font-[600]">MEDIA</p>
        <p>Blog</p>
        <p>Press Review</p>
        <p>Media Resources</p>
      </div>
      <div className="text-white">
        <p className="text-[#cccccc] text-sm font-[600]">LEGAL</p>
        <p>Request Personal Data</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Patents</p>
        <p className="text-[#cccccc] text-sm font-[600]">+ View More</p>
      </div>
    </div>
  );
};

const CopyRight = () => {
  return (
    <div className="bg-black flex lg:flex-row lg:space-y-0 space-y-5 flex-col items-center justify-between px-10 py-2">
      <img src={insta} alt="insta" />
      <div className="flex  items-center text-white space-x-5 ">
        <Telegram />
        <Instagram />
        <Facebook />
        <Twiter />
        <UnknowM />
        <Youtube />
      </div>
      <p className="text-[#cccccc]  text-sm font-[600]">
        © 2022 VINCI BRANDS LLC. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <FooterHead />
      <CopyRight />
    </div>
  );
};

export default Footer;
