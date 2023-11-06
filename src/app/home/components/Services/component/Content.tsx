import Image from "next/image";
import { LinkButton } from "../../Hero";
import globe from "../../../../../assets/img/globe.png";
import dollar from "../../../../../assets/img/dollar.png";

interface ContentProps {
  title: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({ title, description }) => {
  return (
    <div>
      <div>
        <h1 className="lg:text-[24px] text-[18px] font-montserrat">{title}</h1>
        <p className="mt-4 lg:w-[400px] text-[16px] text-gray-500">
          {description}
        </p>

        <div className="flex gap-8 my-6">
          <div className="flex items-center gap-4">
            <Image src={dollar} alt="Dollar" width={31} height={31} />
            <p>Lorem ipsum</p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={dollar} alt="Dollar" width={31} height={31} />
            <p>Lorem ipsum</p>
          </div>
        </div>
        <LinkButton to="/">Call to Action</LinkButton>
      </div>
    </div>
  );
};

export const ContentOne: React.FC = () => {
  return (
    <Content
      title="Lorem ipsum dolor sit amet consect"
      description="Fast inter and Intra Bank web and mobile banking transactions made easy for your organisation. Just plug and use."
    />
  );
};

export const ContentTwo: React.FC = () => {
  return (
    <Content
      title="Lorem ipsum dolor sit amet consect"
      description="A plug and play system that automates Loan Application, Loan Disbursement & Loan Repayment process, from one interphase."
    />
  );
};

export const ContentThree: React.FC = () => {
  return (
    <Content
      title="Lorem ipsum dolor sit amet consect"
      description="Authorize and Manage all the users within your organization from your back office."
    />
  );
};

export const ContentFour: React.FC = () => {
  return (
    <Content
      title="Lorem ipsum dolor sit amet consect"
      description="Offer additional bills payment services to your customers with a few simple clicks."
    />
  );
};

export const ContentFive: React.FC = () => {
  return (
    <Content
      title="Lorem ipsum dolor sit amet consect"
      description="With Pimus, you pay as you go, only for what you use & not more."
    />
  );
};
