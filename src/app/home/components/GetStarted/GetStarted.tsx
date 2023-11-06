import world from "../../../../assets/img/world.png";
import vector from "../../../../assets/img/Vector.png";
import { CheckIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface GetStartedProps {}

const GetStarted: React.FC<GetStartedProps> = () => {
  return (
    <div className="mt-44 text-white">
      <div
        className="bg-primary pt-16 px-12 rounded-xl"
        style={{
          backgroundImage: `url(${world})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <p className=" font-montserrat lg:text-[39px] w-[70%]">
          ipsam voluptatem quia voluptas sit aspernatur aut
        </p>
        <div className="lg:flex grid grid-cols-12 items-center gap-4 mt-6 ">
          <span className="lg:col-span-4 col-span-4 flex items-center gap-2 text-secondary text-[16px]">
            <CheckIcon className="w-5 h-5" />
            aspernatur
          </span>
          <span className="lg:col-span-3 col-span-4 flex items-center gap-2 text-secondary text-[16px]">
            <CheckIcon className="w-5 h-5" />
            aspernatur
          </span>
          <span className=" lg:col-span-3 col-span-4 flex items-center gap-2 text-secondary text-[16px]">
            <CheckIcon className="w-5 h-5" />
            aspernatur
          </span>
          <span className=" lg:col-span-3 col-span-4 flex items-center gap-2 text-secondary text-[16px]">
            <CheckIcon className="w-5 h-5" />
            aspernatur
          </span>
        </div>
        <div>
          <div className="border flex items-center justify-between py-2 gap-4 w-fit pl-6 pr-2 rounded-[40px] mt-9">
            <span>Get Started</span>
            <span className="w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center ml-4">
              <ArrowUpRightIcon className="text-primary w-5 h-5" />
            </span>
          </div>
          <div className="flex justify-center pt-16">
            <Image alt="" src={vector} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
