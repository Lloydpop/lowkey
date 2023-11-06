"use client";
import { Card } from "../Services/Services";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ArrowLeft2, ArrowRight2, QuoteDown } from "iconsax-react";
import placeholder from "../../../../assets/img/placeholder.png";
import rating from "../../../../assets/img/rating.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
interface ClientSaysProps {}

const ClientSays: React.FC<ClientSaysProps> = () => {
  const [visibleSlides, setVisibleSlides] = useState<number>(3); // Default to 3 slides
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)"
  );

  useEffect(() => {
    // Adjust the number of visible slides based on the screen size
    if (isSmallScreen) {
      setVisibleSlides(1);
    } else if (isMediumScreen) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(3);
    }
  }, [isSmallScreen, isMediumScreen]);
  return (
    <div className="lg:mt-44 mt-28">
      <Card>
        <section className="p-7">
          <div className="text-center">
            <p className="text-secondary mb-2 mt-8 text-[14px] font-bold">
              Evidence Dey
            </p>
            <h1 className="text-[40px] font-montserrat">
              What our clients say about us
            </h1>
          </div>

          <div className=" mt-[60px] relative">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={20}
              totalSlides={3}
            >
              <div className="flex justify-center">
                <ButtonBack className="absolute left-2 top-20 z-20 cursor-pointer">
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-primary">
                    <ArrowLeft2 className="text-white w-5 h-5" />
                  </div>
                </ButtonBack>
                <ButtonNext className="absolute top-20 right-2 z-20 cursor-pointer">
                  <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-primary">
                    <ArrowRight2 className="text-white w-5 h-5" />
                  </div>
                </ButtonNext>
              </div>
              <Slider>
                <Slide index={0}>
                  <div className="grid grid-cols-12 gap-12 justify-center px-24">
                    <div className="bg-white p-8 col-span-6 rounded-lg relative">
                      <p className="text-gray-300 absolute right-6 top-10">
                        <QuoteDown variant="Bold" className="w-10 h-10" />
                      </p>
                      <h3 className="text-[20px] font-semibold font-montserrat">
                        I paid off $24,000 first year
                      </h3>
                      <p className="text-[16px] text-gray-500 mt-3 w-[70%]">
                        “Without the system and the support, I would have been
                        canoeing without a paddle! Thanks for being my paddle,
                        UNINE. ”
                      </p>
                      <div className="border-b border-gray-500 w-full my-5" />
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <Image alt="" src={placeholder} />
                          <div className="text-[16px]">
                            <p className="font-bold text-gray-500">
                              Ronald Richards
                            </p>
                            <p className="mt-1 font-[400] text-gray-400 italic">
                              First Year of using UNINE
                            </p>
                          </div>
                        </div>
                        <Image alt="" src={rating} />
                      </div>
                    </div>
                    <div className="bg-white p-8 col-span-6 rounded-lg relative">
                      <p className="text-gray-300 absolute right-6 top-10">
                        <QuoteDown variant="Bold" className="w-10 h-10" />
                      </p>
                      <h3 className="text-[20px] font-semibold font-montserrat">
                        I paid off $24,000 first year
                      </h3>
                      <p className="text-[16px] text-gray-500 mt-3 w-[70%]">
                        “Without the system and the support, I would have been
                        canoeing without a paddle! Thanks for being my paddle,
                        UNINE. ”
                      </p>
                      <div className="border-b border-gray-500 w-full my-5" />
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <Image alt="" src={placeholder} />
                          <div className="text-[16px]">
                            <p className="font-bold text-gray-500">
                              Ronald Richards
                            </p>
                            <p className="mt-1 font-[400] text-gray-400 italic">
                              First Year of using UNINE
                            </p>
                          </div>
                        </div>
                        <Image alt="" src={rating} />
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  {" "}
                  <div className="grid grid-cols-12 gap-12 justify-center px-24">
                    <div className="bg-white p-8 col-span-6 rounded-lg relative">
                      <p className="text-gray-300 absolute right-6 top-10">
                        <QuoteDown variant="Bold" className="w-10 h-10" />
                      </p>
                      <h3 className="text-[20px] font-semibold font-montserrat">
                        I paid off $24,000 first year
                      </h3>
                      <p className="text-[16px] text-gray-500 mt-3 w-[70%]">
                        “Without the system and the support, I would have been
                        canoeing without a paddle! Thanks for being my paddle,
                        UNINE. ”
                      </p>
                      <div className="border-b border-gray-500 w-full my-5" />
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <Image alt="" src={placeholder} />
                          <div className="text-[16px]">
                            <p className="font-bold text-gray-500">
                              Ronald Richards
                            </p>
                            <p className="mt-1 font-[400] text-gray-400 italic">
                              First Year of using UNINE
                            </p>
                          </div>
                        </div>
                        <Image alt="" src={rating} />
                      </div>
                    </div>
                    <div className="bg-white p-8 col-span-6 rounded-lg relative">
                      <p className="text-gray-300 absolute right-6 top-10">
                        <QuoteDown variant="Bold" className="w-10 h-10" />
                      </p>
                      <h3 className="text-[20px] font-semibold font-montserrat">
                        I paid off $24,000 first year
                      </h3>
                      <p className="text-[16px] text-gray-500 mt-3 w-[70%]">
                        “Without the system and the support, I would have been
                        canoeing without a paddle! Thanks for being my paddle,
                        UNINE. ”
                      </p>
                      <div className="border-b border-gray-500 w-full my-5" />
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <Image alt="" src={placeholder} />
                          <div className="text-[16px]">
                            <p className="font-bold text-gray-500">
                              Ronald Richards
                            </p>
                            <p className="mt-1 font-[400] text-gray-400 italic">
                              First Year of using UNINE
                            </p>
                          </div>
                        </div>
                        <Image alt="" src={rating} />
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="grid grid-cols-12 gap-12 justify-center px-24">
                    <div className="bg-white p-8 col-span-6 rounded-lg relative">
                      <p className="text-gray-300 absolute right-6 top-10">
                        <QuoteDown variant="Bold" className="w-10 h-10" />
                      </p>
                      <h3 className="text-[20px] font-semibold font-montserrat">
                        I paid off $24,000 first year
                      </h3>
                      <p className="text-[16px] text-gray-500 mt-3 w-[70%]">
                        “Without the system and the support, I would have been
                        canoeing without a paddle! Thanks for being my paddle,
                        UNINE. ”
                      </p>
                      <div className="border-b border-gray-500 w-full my-5" />
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <Image alt="" src={placeholder} />
                          <div className="text-[16px]">
                            <p className="font-bold text-gray-500">
                              Ronald Richards
                            </p>
                            <p className="mt-1 font-[400] text-gray-400 italic">
                              First Year of using UNINE
                            </p>
                          </div>
                        </div>
                        <Image alt="" src={rating} />
                      </div>
                    </div>
                    <div className="bg-white p-8 col-span-6 rounded-lg relative">
                      <p className="text-gray-300 absolute right-6 top-10">
                        <QuoteDown variant="Bold" className="w-10 h-10" />
                      </p>
                      <h3 className="text-[20px] font-semibold font-montserrat">
                        I paid off $24,000 first year
                      </h3>
                      <p className="text-[16px] text-gray-500 mt-3 w-[70%]">
                        “Without the system and the support, I would have been
                        canoeing without a paddle! Thanks for being my paddle,
                        UNINE. ”
                      </p>
                      <div className="border-b border-gray-500 w-full my-5" />
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <Image alt="" src={placeholder} />
                          <div className="text-[16px]">
                            <p className="font-bold text-gray-500">
                              Ronald Richards
                            </p>
                            <p className="mt-1 font-[400] text-gray-400 italic">
                              First Year of using UNINE
                            </p>
                          </div>
                        </div>
                        <Image alt="" src={rating} />
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
        </section>
      </Card>
    </div>
  );
};
export default ClientSays;
