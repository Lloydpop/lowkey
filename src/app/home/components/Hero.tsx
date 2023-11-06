import Image from "next/image";
import { Button, NavLink } from "../../../components";
import { ArrowRight, Play } from "iconsax-react";
import local from "../../../assets/img/local.png";
import people from "../../../assets/img/people-smiling.png";
import market from "../../../assets/img/market-woman.png";
import man from "../../../assets/img/man-on-laptop.png";
import coinbase from "../../../assets/img/coinbase-logo.png";
import adobe from "../../../assets/img/adobe-logo.png";
import altasian from "../../../assets/img/atlassian.png";
import { ElementType, ReactNode } from "react";

interface HeroProps {}

interface LinkButtonProps {
  children: ReactNode;
  to: string;
  Icon?: ElementType;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  to,
  Icon = ArrowRight,
}) => {
  return (
    <NavLink to={to}>
      <span className="text-primary font-[600] text-[18px] flex items-center gap-2">
        {children}
        <Icon variant="Bold" className="w-5 h-5" />
      </span>
    </NavLink>
  );
};

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section>
      <div className="flex lg:flex-row flex-col justify-between lg:items-center">
        <div className="lg:w-[60%] w-full">
          <p className="text-secondary flex items-center text-[14px] bg-[#F9F1E6] w-fit p-2 rounded-3xl">
            <span className="block bg-white px-2 rounded-xl"> New!</span>
            <span className="ml-3 block">
              A plug-and-play Web & Mobile Banking Platform
            </span>
            <ArrowRight className="w-5 h-5 mt-1 ml-[3px]" />
          </p>
          <div>
            <h1 className="lg:text-[48px] md:text-[39px] text-[30px] font-montserrat mt-7 lg:leading-tight">
              Corporate and Retail <br />
              <span className="font-[600] text-secondary">
                Digital Banking Platform
              </span>
              <br className="lg:block hidden" />
              <span className="ml-1"> for MFBs, MFIs & Neobanks</span>
            </h1>
            <p className="lg:w-[56%] text-gray-500 text-[15px] lg:text-[16px] mt-6">
              Automate financial processes, onboard and manage your customers,
              and ultimately grow revenue with ease with Primus API as a Service
              platform
            </p>
          </div>
          <div className="flex items-center gap-6 mt-7">
            <Button variant="outline">
              <span>View Demo</span>
              <span className="w-[38px] h-[38px] rounded-full bg-primary flex justify-center items-center ml-4">
                <Play variant="Bold" className="text-white w-5 h-5" />
              </span>
            </Button>
            <LinkButton to="/contact-sales">Contact Sales</LinkButton>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-6">
            <div>
              <Image src={local} alt="Local" width={208} height={208} />
            </div>
            <div className="mt-12">
              <Image src={people} alt="People" width={208} height={208} />
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div>
              <Image src={market} alt="Market" width={208} height={208} />
            </div>
            <div className="mt-12">
              <Image src={man} alt="Man" width={208} height={208} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-between lg:flex-row flex-col gap-y-10">
        <div>
          <div>
            <p className="uppercase text-gray-600 text-[18px]">trusted by</p>
          </div>
          <ul className="mt-5 flex items-center gap-6">
            <li>
              <Image src={coinbase} alt="Coinbase" width={80} height={80} />
            </li>
            <li>
              <Image src={adobe} alt="Adobe" width={80} height={80} />
            </li>
            <li>
              <Image src={altasian} alt="Atlassian" width={89} height={89} />
            </li>
            <li>
              <Image src={altasian} alt="Atlassian" width={89} height={89} />
            </li>
          </ul>
        </div>
        <div>
          <div>
            <p className="uppercase text-gray-600 text-[18px] lg:text-right">
              Primus by the numbers
            </p>
          </div>
          <ul className="flex items-center gap-6 mt-5 font-lato">
            <li>
              <span className="text-gray-800 font-bold text-[17px]">56</span>
              <span className="ml-1 text-[14px] text-gray-500">
                MFBs onboarded
              </span>
            </li>
            <li>
              <span className="text-gray-800 font-bold text-[17px]">
                $1.45M
              </span>
              <span className="ml-1 text-[14px] text-gray-500">
                in transactions
              </span>
            </li>
            <li>
              <span className="text-gray-800 font-bold text-[17px]">850K</span>
              <span className="ml-1 text-[14px] text-gray-500">
                active users
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
