"use client";
import { ReactNode, useState, useEffect } from "react";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface PageWrapperProps {
  children: ReactNode;
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-4 bg-secondary text-white p-2 rounded-full cursor-pointer duration-100 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </div>
  );
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="py-6">
      <ScrollToTopButton />
      <Header />
      <div className="lg:mt-24 mt-16">{children}</div>
      <div className="lg:px-[100px] px-8">
        <Footer />
      </div>
    </div>
  );
};
export default PageWrapper;
