import FAQ from "../home/components/FAQ/FAQ";
import vector from "../../assets/img/vector2.png";
import { LinkButton } from "../home/components/Hero";
import { Button } from "@/components";
import { Play } from "iconsax-react";
import Image from "next/image";
interface BillingProps {}
const Billing: React.FC<BillingProps> = () => {
  return (
    <div>
      <div className="lg:px-[70px] px-8 flex  flex-col items-center">
        <div className="text-center">
          <h1 className="lg:text-[40px] text-[26px] font-[500] font-montserrat">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <p className="text-gray-500 mt-6 text-[20px]">
            How often do you want to pay?
          </p>
          <div className=" flex flex-col lg:flex-row items-center justify-center gap-5 mt-7">
            <div className="border border-primary px-8 py-2 w-fit flex items-center gap-2 rounded-lg text-[14px]">
              <span className=" text-gray-500 ">Yearly</span>

              <Image alt="" src={vector} className="w-5 h-5" />
              <h1 className="bg-gradient-to-r from-[#E78020]  to-[#002B5A] inline-block text-transparent bg-clip-text">
                Get 1 month free
              </h1>
            </div>
            <p>Monthly</p>
          </div>
        </div>

        <section className="flex justify-between flex-col w-full lg:flex-row  mt-24">
          {/* pay as you go */}
          <div className=" border lg:border-r-0 rounded-xl rounded-tr-none rounded-br-none lg:mb-0 mb-24">
            <div className="py-14 px-8">
              <h4 className="text-[24px] font-[600]">Pay as you go </h4>
              <p className="text-[20px] text-gray-500 mt-5">
                Ideal for freelancers, startups, or smaller teams.
              </p>
              <ul className=" list-disc mt-6 ml-3 space-y-1">
                <li className="text-gray-300">
                  <span className="text-gray-500 text-[14px]">
                    Every feature, nothing held back.
                  </span>
                </li>
                <li className="text-gray-300">
                  <span className="text-gray-500 text-[14px]">
                    00 GB storage for files & documents
                  </span>
                </li>
                <li className="text-gray-300">
                  <span className="text-gray-500 text-[14px]">
                    5 Month-to-month, pay as you go
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#FEF9F4] px-8 pt-12 py-16 space-y-5">
              <h4 className="text-[20px] font-[500]">
                <sup>$</sup>15/user per month
              </h4>
              <div>
                <h4 className="text-[15px] font-[600]">
                  We only bill you for employees.
                </h4>
                <p className="text-[15px] mt-1 mb-6">
                  Invite clients, contractors and guests for free.
                </p>
              </div>
              <LinkButton to="/">Call to action</LinkButton>
            </div>
          </div>
          {/* enterprise */}
          <div className=" relative">
            <div
              className="absolute lg:-right-7 right-5 -top-7 lg:w-[198.35px] flex justify-center px-6 py-1 rounded-md -rotate-[3deg]"
              style={{
                background:
                  "linear-gradient(115.13deg, #002B5A 0%, #E78020 120.37%)",
              }}
            >
              <p className="text-white font-[700] uppercase">
                Best value for <br />
                larger teams
              </p>
            </div>
            <div className="bg-[#ec677b1c] border-secondary border-b-0  border-[3px] px-12 pt-12 pb-10 rounded-xl  rounded-bl-none rounded-br-none">
              <div className="flex items-center gap-6">
                <h2 className="font-[600] text-[24px]">Enterprises</h2>
                <p className="bg-secondary text-white text-[14px] px-6 py-2 rounded-3xl">
                  PRO UNLIMITED
                </p>
              </div>
              <p className="w-[60%] mt-8 text-[20px] text-gray-500">
                Perfect for growing businesses, larger groups, and companies
                that want the best.
              </p>
              <div className="flex flex-col lg:grid grid-cols-12 gap-12">
                <ul className=" list-disc mt-6 ml-3 lg:col-span-6 col-span-12 space-y-1">
                  <li className="text-gray-300">
                    <span className="text-gray-500 text-[14px]">
                      Every feature we offer, plus…
                    </span>
                  </li>
                  <li className="text-secondary">
                    <span className="text-gray-500 text-[14px]">
                      10x file & document storage (5 TB)
                    </span>
                  </li>
                  <li className="text-secondary">
                    <span className="text-gray-500 text-[14px]">
                      First-in-line 24/7/365 Priority Support
                    </span>
                  </li>
                </ul>
                <ul className=" list-disc mt-6 ml-3 col-span-6 space-y-1">
                  <li className="text-secondary">
                    <span className="text-gray-500 text-[14px]">
                      1:1 onboarding tour with our team
                    </span>
                  </li>
                  <li className="text-secondary">
                    <span className="text-gray-500 text-[14px]">
                      Option to pay annually by check
                    </span>
                  </li>
                  <li className="text-secondary">
                    <span className="text-gray-500 text-[14px]">
                      Annual billing for simplified accounting
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" border-[3px] border-[#EC677C] border-t-gray-300 px-12 pt-12 pb-10 rounded-xl rounded-tl-none rounded-tr-none">
              <div className="bg-[#FEF9F4] space-y-5">
                <h4 className="text-[20px] font-[500]">
                  <span className="text-gray-800 font-[600]">
                    {" "}
                    Unlimited users
                  </span>{" "}
                  just <sup>$</sup>299/month, billed annually
                </h4>
                <div>
                  <h4 className="text-[15px] font-[600]">
                    No per-user charges. Your whole organization for one fixed
                    price.
                  </h4>
                  <p className="text-[15px] mt-1 mb-6">
                    If you prefer to pay month-to-month, it’s $349/month.
                  </p>
                </div>
                <Button variant="outline">
                  <span>Call to action</span>
                  <span className="w-[35px] h-[35px] rounded-full bg-primary flex justify-center items-center ml-4">
                    <Play variant="Bold" className="text-white w-5 h-5" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="px-8">
        <FAQ />
      </div>
    </div>
  );
};
export default Billing;
