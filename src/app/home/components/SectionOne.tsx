import dashboardImage from "../../../assets/img/retail-banking-image.png";
import globe from "../../../assets/img/globe.png";
import dollar from "../../../assets/img/dollar.png";
import { Lock } from "iconsax-react";
import { LinkButton } from "./Hero";
import Image from "next/image";
interface SectionOneProps {}

const SectionOne: React.FC<SectionOneProps> = () => {
  return (
    <div className=" lg:mt-44 mt-20 flex justify-between lg:flex-row flex-col-reverse flex-col">
      <div className="lg:w-[505px] lg:h-[309px] h-[200px] w-[280px] relative z-10">
        <div className="w-full h-full bg-primary absolute -z-10 left-0 top-0 rounded-md"></div>
        <div className="w-full h-full bg-secondary absolute -z-10 top-6 -right-6 rounded-md"></div>
        <div className=" absolute -bottom-[80px]  w-[160px] h-[75px] bg-[#00923F] -right-24 rounded-md p-5 flex items-center justify-between z-20">
          <div className="bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
            <Lock variant="Bold" className="w-5 h-5 text-[#00923F]" />
          </div>
          <div className="text-white font-montserrat">
            <p className="font-bold text-[24px]">100%</p>
            <p>Secured</p>
          </div>
        </div>
        <Image
          alt=""
          src={dashboardImage}
          className="w-full absolute -right-12 top-12"
        />
      </div>
      <div>
        <div>
          <p className="text-secondary text-[15px] mb-2 font-bold">
            Lorem ipsum dolor sit amet
          </p>
          <h1 className="lg:text-[39px] text-[26px] font-montserrat leading-[51px]">
            Digital Banking
            <br className="hidden lg:block" /> Made Easy
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-14 mt-5">
          <div>
            <Image alt="" src={globe} className="w-[31px] my-4" />
            <h1 className="lg:text-[24px] text-[20px] font-montserrat">
              Corporate Banking
            </h1>
            <p className="mt-4 lg:w-[222px] text-gray-500">
              Digitise your corporate banking, automate loan management process
              and more with ease.
            </p>
          </div>
          <div>
            <Image src={dollar} alt="" className="w-[31px] my-4" />
            <h1 className="lg:text-[24px] text-[20px] font-montserrat">
              Retail Banking
            </h1>
            <p className="mt-4 lg:w-[222px] text-gray-500">
              A complete mobile and web banking suite of plug and play API
              microservices to digitize your retail banking process
            </p>
          </div>
        </div>
        <div className="my-8">
          <LinkButton to="">Contact Sales</LinkButton>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
