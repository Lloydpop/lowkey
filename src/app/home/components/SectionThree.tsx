import Image from "next/image";
import mobile2 from "../../../assets/img/mobile-2.png";
import mobile3 from "../../../assets/img/mobile-3.png";
import { LinkButton } from "./Hero";
interface SectionThreeProps {}
const SectionThree: React.FC<SectionThreeProps> = () => {
  return (
    <div className="lg:mt-44 mt-28 flex flex-col lg:flex-row justify-between gap-24 lg:items-center">
      <div className="flex flex-col lg:flex-row gap-20 lg:w-[50%]">
        <Image src={mobile2} alt="" className="lg:w-[205px] w-[70%] mx-auto" />
        <Image src={mobile3} alt="" className="lg:w-[205px] w-[70%] mx-auto" />
      </div>
      <div className="lg:w-[50%]">
        <p className="text-secondary text-[15px] mb-2 font-bold">
          Lorem ipsum dolor sit amet
        </p>
        <h1 className="lg:text-[39px] text-[27px] font-montserrat">
          A Powerful suite of APIs & <br />
          Microservices
        </h1>

        <div className="mt-2">
          <p className="text-gray-500 text-[16px] mb-10">
            Customize & launch your web and mobile digital banking products fast
            and easy with our detailed & robust API docs. Manage your
            integrations easily from your API console
          </p>
          <LinkButton to="/">View Our Docs</LinkButton>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
