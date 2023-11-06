import { LinkButton } from "./Hero";
import mobile from "../../../assets/img/mobile.png";
import { OceanProtocol } from "iconsax-react";
import Image from "next/image";
interface SectionTwoProps {}

const SectionTwo: React.FC<SectionTwoProps> = () => {
  return (
    <section className="mt-44 flex justify-between gap-y-24 flex-col lg:flex-row">
      <div>
        <p className="text-secondary text-[15px] mb-2 font-bold">
          Lorem ipsum dolor sit amet
        </p>
        <h1 className=" font-montserrat lg:text-[39px] text-[26px]">
          A Cost & Time Efficient
          <br /> Solution
        </h1>
        <div className="flex gap-6">
          <div className="flex flex-col items-center mt-10">
            <span className="block border border-secondary w-1 h-[12%]"></span>
            <span className="block border-l border-dashed border-secondary w-[1px] h-[37%]"></span>
            <span className="block border border-gray-600 w-1 h-[12%]"></span>
            <span className="block border-l border-dashed border-gray-600 w-[1px] h-[22%]"></span>
          </div>
          <div className="mt-10 mb-5">
            <div>
              <p className="text-secondary lg:text-[23px] text-[20px] font-bold">
                Less than 24 hours fully integration
              </p>
              <p className="text-secondary text-[16px]">
                Automate transactions, loan management & billing payment
              </p>
            </div>
            <div className="mt-10">
              <p className="lg:text-[23px] text-[20px] my-2 font-bold">
                Budget friendly integration
              </p>
              <p className="text-gray-500 text-[16px] mb-6">
                Spend less plugging into Primus than building from scratch
              </p>
            </div>
          </div>
        </div>
        <LinkButton to="/">Contact Sales</LinkButton>
      </div>
      <div className="lg:w-[40%] mx-auto lg:mx-0 relative z-10">
        <div className="absolute -top-10 -left-10 w-[206px] h-[206px] rounded-full bg-secondary -z-10" />
        <div className="absolute -bottom-10 left-[50px] w-[206px] h-[206px] rounded-full bg-[#00923F] -z-10" />
        <div className=" absolute bottom-[56px]  w-[218px] bg-[#00923F] left-0 rounded-lg p-3 flex gap-5  z-20">
          <div className=" rounded-full flex justify-center items-center">
            <OceanProtocol variant="Bold" className="w-7 h-7 text-white" />
          </div>
          <div className="text-white font-montserrat">
            <p>Swift</p>
            <p className="font-bold text-[24px]">Installation</p>
          </div>
        </div>
        <Image src={mobile} alt="" className="w-[218px] " />
      </div>
    </section>
  );
};
export default SectionTwo;
