"use client";
import { Logo } from "..";
import { Input } from "../Form/Input/Input";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import insta from "../../assets/img/insta.png";
import Image from "next/image";
interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-24 font-heebo">
      <div className="border-b  pb-7">
        <Logo size={"135.8"} />
      </div>
      <div className="grid grid-cols-12 mt-12 gap-8">
        <div className=" text-[20px] font-[500] lg:col-span-4 col-span-12 ">
          <h1>
            Subscribe to our <br />
            newsletter
          </h1>
          <div className="mt-6 lg:w-[260px] relative">
            <Input label="Email address" />
            <div className="w-[50px] h-[50px] bg-primary absolute right-0 top-1 rounded-tl-md rounded-tr-md flex items-center justify-center">
              <div className="bg-white w-[20px] h-[20px]"></div>
            </div>
          </div>
        </div>
        <div className=" text-[17px] font-[500] lg:col-span-3 col-span-12">
          <h1>Products</h1>
          <ul className="mt-6 text-[15px] lg:text-black lg:font-[500] font-[400] text-gray-500 space-y-6">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className=" text-[17px] font-[500] lg:col-span-2 col-span-12">
          <h1>About</h1>
          <ul className="mt-6 text-[15px] space-y-6 lg:text-black lg:font-[500] font-[400]">
            <li>Our Story</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className=" text-[17px] font-[500] col-span-3">
          <h1>Help</h1>
          <ul className="mt-6 text-[15px] space-y-6 lg:text-black lg:font-[500] font-[400]">
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex items-center gap-5 col-span-12 mt-8">
          <Image alt="" src={facebook} />
          <Image alt="" src={twitter} />
          <Image alt="" src={insta} />
        </div>
        <div className="col-span-12 mt-12 flex flex-col lg:flex-row justify-between items-center font-[500]">
          <p className="text-[15px]">© 2023 Xanotech. All rights reserved.</p>
          <p className="text-[15px]">Terms & Conditions Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};
