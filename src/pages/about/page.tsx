import Group from "../../assets/img/Group.png";
import people from "../../assets/img/people.png";
import sight from "../../assets/img/sight.png";
import search from "../../assets/img/search.png";
import world from "../../assets/img/world2.png";
import point from "../../assets/img/point.png";
import pic from "../../assets/img/pic.png";
import pic2 from "../../assets/img/pic2.png";
import pic3 from "../../assets/img/pic3.png";
import logo1 from "../../assets/img/logo1.png";
import logo2 from "../../assets/img/logo2.png";
import logo3 from ".../../assets/img/logo3.png";
import logo4 from "../../assets/img/logo4.png";
import logo5 from "../../assets/img/logo5.png";
import Image from "next/image";
interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="mt-10 px-4">
      {/* ABOUT PRIMUS */}

      <div className="w-[606px] h-[112px] gap-[20px] flex items-center justify-center mx-auto ">
        <div className="text-center">
          <h1 className="text-[40px] font-500 font-montserrat leading-[48px] mb-[20px] mx-auto">
            About Primus
          </h1>
          <p className="text-[18px] text-center text-gray-500 leading-[21px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat
          </p>
        </div>
      </div>

      {/* ABOUT PRIMUS CARDS*/}

      <div className="w-[1060px] h-[428px] gap-[40px] mx-auto mt-[60px]">
        <div className="grid grid-cols-12 w-[1080px] h-[194px] gap-[80px] mb-[40px]">
          <div className="flex w-[490px] h-full col-span-6 bg-[#FDE9E9] rounded-lg shadow-sm">
            <div className="mt-[32px] mx-[24px] w-[200px] h-[80px]">
              <Image src={people} alt="" className="w-full rounded-lg" />
            </div>
            <div className="mt-[32px]">
              <h2 className="text-[18px] font-montserrat font-[500] leading-[26px] mb-4">
                LOREM IPSUM
              </h2>
              <p className="text-[16px] text-gray-400 leading-[19px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
            <div className="top-0 right-0 h-full w-[360px]">
              <Image src={Group} alt="" className="w-full rounded-lg" />
            </div>
          </div>

          <div className="flex w-[490px] h-full col-span-6 bg-[#E9FDF5] rounded-lg shadow-sm">
            <div className="mt-[32px] mx-[24px] w-[200px] h-[80px]">
              <Image src={world} alt="" className="w-full rounded-lg" />
            </div>
            <div className="mt-[32px]">
              <h2 className="text-[18px] font-montserrat font-[500] leading-[26px] mb-4">
                LOREM IPSUM
              </h2>
              <p className="text-[16px] text-gray-400 leading-[19px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
            <div className="top-0 right-0 h-full w-[360px]">
              <Image src={Group} alt="" className="w-full rounded-lg" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 w-[1080px] h-[194px] gap-[80px]">
          <div className="flex w-[490px] h-full col-span-6 bg-[#FDE9FD] rounded-lg shadow-sm">
            <div className="mt-[32px] mx-[24px] w-[200px] h-[80px]">
              <Image src={search} alt="" className="w-full rounded-lg" />
            </div>
            <div className="mt-[32px]">
              <h2 className="text-[18px] font-montserrat font-[500] leading-[26px] mb-4">
                LOREM IPSUM
              </h2>
              <p className="text-[16px] text-gray-400 leading-[19px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
            <div className="top-0 right-0 h-full w-[360px]">
              <Image src={Group} alt="" className="w-full rounded-lg" />
            </div>
          </div>

          <div className="flex w-[490px] h-full col-span-6 bg-[#E9EBFD] rounded-lg shadow-sm">
            <div className="mt-[32px] mx-[24px] w-[200px] h-[80px]">
              <Image src={sight} alt="" className="w-full rounded-lg" />
            </div>
            <div className="mt-[32px]">
              <h2 className="text-[18px] font-montserrat font-[500] leading-[26px] mb-4">
                LOREM IPSUM
              </h2>
              <p className="text-[16px] text-gray-400 leading-[19px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
            <div className="top-0 right-0 h-full w-[360px]">
              <Image src={Group} alt="" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* OUR MISSION */}

      <div className="w-[1060px] h-[481px] flex ml-[180px] gap-[150px] my-[180px]">
        <div className="w-[489px] h-[368px] gap-[80px] my-[50px]">
          <div className="w-full h-[144px] mb-[75px]">
            <h2 className="text-[32px] font-montserrat font-[600] leading-[45px] mb-[20px]">
              Our mission
            </h2>
            <p className="text-[16px] text-gray-400 leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras.{" "}
            </p>
          </div>
          <div className="w-full h-[144px]">
            <h2 className="text-[32px] font-montserrat font-[600] leading-[45px] mb-[20px]">
              Our story
            </h2>
            <p className="text-[16px] text-gray-400 leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras.{" "}
            </p>
          </div>
        </div>
        <div className="w-[350px] h-[480px] bg-[#5C1515]"></div>
      </div>

      {/* TIMELINE */}

      <div className="w-[1060px] h-[650px] flex ml-[160px] gap-[120px] my-[80px]">
        <div className="w-[382px] h-[641px] gap-[40px]">
          <div>
            <h1 className="text-[32px] text-primary font-montserrat font-[700] leading-[55px]">
              Timeline
            </h1>
            <p className="text-[16px] text-gray-400 leading-[24px] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum{" "}
            </p>
          </div>
          <div className="w-[350px] h-[480px] bg-[#5C1515] m-3 mt-10"></div>
        </div>
        <div className="w-[550px] h-[670px] gap-[50px]">
          <div className="w-full h-[180px] my-[20px] border-b-[1px] border-[#989898] mb-5">
            <div className="top-0 left-0 flex mb-[20px]">
              <Image src={point} alt="" className="w-[24px] h-[24px]" />
              <h2 className="ml-6 top-0 text-[24px] text-primary font-montserrat font-[700] leading-[30px]">
                2014
              </h2>
            </div>
            <div className="ml-12 gap-[12px]">
              <h2 className="text-[20px] font-[500] leading-[26px] my-[10px]">
                LOREM IPSUM
              </h2>
              <p className="text-[16px] font-[400] leading-[32px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
          </div>

          <div className="w-full h-[180px] mt-[50px] mb-[40px] border-b-[1px] border-[#989898]">
            <div className="top-0 left-0 flex">
              <Image src={point} alt="" className="w-[24px] h-[24px]" />
              <h2 className="ml-6 top-0 text-[24px] text-primary font-montserrat font-[700] leading-[30px]">
                2016
              </h2>
            </div>
            <div className="ml-12 gap-[12px]">
              <h2 className="text-[20px] font-[500] leading-[26px] my-[15px]">
                LOREM IPSUM
              </h2>
              <p className="text-[16px] font-[400] leading-[32px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
          </div>

          <div className="w-full h-[180px] my-[50px] border-b-[1px] border-[#989898]">
            <div className="top-0 left-0 flex">
              <Image src={point} alt="" className="w-[24px] h-[24px]" />
              <h2 className="ml-6 top-0 text-[24px] text-primary font-montserrat font-[700] leading-[30px]">
                2018
              </h2>
            </div>
            <div className="ml-12 gap-[12px]">
              <h2 className="text-[20px] font-[500] leading-[26px] my-[15px]">
                LOREM IPSUM
              </h2>
              <p className="text-[16px] font-[400] leading-[32px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nibh
                urna in proin dui purus bibendum cras. Morbi cursus nunc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TEAM CARD */}

      <div className="w-[1198px] h-[670px] ml-[100px] gap-[200px] my-[50px] mt-[250px]">
        <div className="w-full h-[64px] flex mb-20 gap-[510px]">
          <h2 className="text-[42px] font-[700] font-sans leading-[55px]">
            Our Team
          </h2>
          <p className="w-[496px] text-[18px] font-[400] leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies.
          </p>
        </div>

        <div className="w-full h-[428px] flex grid-cols-12 gap-[35px] mt-[50px]">
          <div className="w-[370px] h-full col-span-4 bg-[#FDE9E9] p-6 rounded-xl">
            <Image src={pic} alt="" className="w-full rounded-lg" />
            <div className="w-[350px] h-[48px] gap-[20px] mt-8">
              <h2 className="text-[16px] font-montserrat font-[700] leading-[18px] my-3">
                RONALD RICHARDS
              </h2>
              <p className="text-[16px] text-gray-400 leading-[18px">
                CEO & CO-Founder
              </p>
            </div>
          </div>

          <div>
            <div className="w-[370px] h-full col-span-4 bg-[#E9FDF5] p-6 rounded-xl">
              <Image src={pic2} alt="" className="w-full rounded-lg" />
              <div className="w-[350px] h-[48px] gap-[20px] mt-8">
                <h2 className="text-[16px] font-montserrat font-[700] leading-[18px] my-3">
                  COURTNEY HENRY
                </h2>
                <p className="text-[16px] text-gray-400 leading-[18px">
                  Community Lead
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[370px] h-full col-span-4 bg-[#FDE9FD] p-6 rounded-xl">
              <Image src={pic3} alt="" className="w-full rounded-lg" />
              <div className="w-[350px] h-[48px] gap-[20px] mt-8">
                <h2 className="text-[16px] font-montserrat font-[700] leading-[18px] my-3">
                  SAVANNAH NGUYEN
                </h2>
                <p className="text-[16px] text-gray-400 leading-[18px">
                  Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INVESTORS */}

      <div className="w-[1198px] h-[210px] mt-20 mx-auto">
        <div className="w-[496px] h-[136px] gap-[16px] flex items-center justify-center mx-auto">
          <div className="text-center mx-auto">
            <h1 className="text-[40px] font-montserrat font-[600] leading-[55px] mb-[15px]">
              Investors
            </h1>
            <p className="text-[16px] font-400 text-center leading-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies.
            </p>
          </div>
        </div>

        <div className="w-[1198px] h-[35px] flex grid-cols-10 mt-10 gap-[100px]">
          <div className="flex col-span-2">
            <Image src={logo5} alt="" className="w-[50px] h-[25px] mr-2" />
            <h2 className="text-[30px] font-[500] leading-[18px]">Company</h2>
          </div>

          <div className="flex col-span-2">
            <Image src={logo4} alt="" className="w-[50px] h-[25px] mr-2" />
            <h2 className="text-[30px] font-[500] leading-[18px]">Company</h2>
          </div>

          <div className="flex col-span-2">
            <Image src={logo3} alt="" className="w-[50px] h-[25px] mr-2" />
            <h2 className="text-[30px] font-[500] leading-[18px]">Company</h2>
          </div>

          <div className="flex col-span-2">
            <Image src={logo2} alt="" className="w-[50px] h-[25px] mr-2" />
            <h2 className="text-[30px] font-[500] leading-[18px]">Company</h2>
          </div>

          <div className="flex col-span-2">
            <Image src={logo1} alt="" className="w-[50px] h-[25px] mr-2" />
            <h2 className="text-[30px] font-[500] leading-[18px]">Company</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
