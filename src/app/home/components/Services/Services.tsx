import { ReactNode } from "react";
import pattern from "../../../../assets/img/pattern.png";
import { TabsComponent } from "../../../../components";
import {
  ContentFive,
  ContentFour,
  ContentOne,
  ContentThree,
  ContentTwo,
} from "./component/Content";
import Image from "next/image";
interface ServicesProps {}
interface ServiceCardProps {
  children: ReactNode;
  content?: boolean;
}
export const Card: React.FC<ServiceCardProps> = ({ children, content }) => {
  return (
    <div className="bg-[#FDF3E9] w-[100%] rounded-lg overflow-hidden pb-12 relative">
      {content && (
        <div className="flex justify-between">
          <h1 className="lg:text-[32px] text-[20px] font-montserrat px-12 pt-12">
            A robust Suite of digital
            <br className="hidden lg:block" /> banking Services
          </h1>
          <Image
            alt=""
            src={pattern}
            className="w-[200px] absolute right-0 top-0"
          />
        </div>
      )}

      {children}
    </div>
  );
};
const tabs = [
  {
    label: "Seamless Bank Transaction",
    content: <ContentOne />,
    img: "#400909",
  },
  { label: "Easy to Use Loan BPA", content: <ContentTwo />, img: "#59B81F" },
  {
    label: "Robust User Management ",
    img: "#B88D1F",
    content: <ContentThree />,
  },
  {
    label: "Mobile & Bills Payment",
    img: "#B51FB8",
    content: <ContentFour />,
  },
  {
    label: "Pay as You Use",
    img: "#171715",
    content: <ContentFive />,
  },
];
export const Services: React.FC<ServicesProps> = () => {
  return (
    <div className="lg:mt-44 mt-24">
      <Card content>
        <div className="px-12">
          <TabsComponent tabsData={tabs} />
        </div>
      </Card>
    </div>
  );
};
