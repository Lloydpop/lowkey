"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";

interface TabData {
  label: string;
  content: ReactNode;
  img: string;
}

interface TabsComponentProps {
  tabsData: TabData[];
}

export const TabsComponent: React.FC<TabsComponentProps> = ({ tabsData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);

  const tabsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    const intervalId = setInterval(() => {
      setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabsData.length);
    }, 5000); // Slide every 5 seconds

    return () => {
      window.removeEventListener("resize", setTabPosition);
      clearInterval(intervalId);
    };
  }, [activeTabIndex, tabsData]);

  return (
    <div>
      <div>
        <div className="lg:flex justify-between items-center lg:gap-16 border border-secondary rounded-[43px] lg:pr-7 lg:pl-4 lg:py-4 relative z-10  hidden">
          {tabsData.map((tab, idx) => (
            <button
              key={idx}
              ref={(el) => (tabsRef.current[idx] = el as HTMLButtonElement)}
              className={`pt-2 pb-3 text-sm text-center flex justify-center  text-primary pl-4 ${
                activeTabIndex === idx && "text-white"
              }`}
              onClick={() => {
                setActiveTabIndex(idx);
              }}
            >
              {tab.label}
            </button>
          ))}

          <span
            className="absolute  block h-[70%] bg-primary transition-all duration-300 -z-10 px-12 rounded-3xl"
            style={{
              left: tabUnderlineLeft,
              width: tabUnderlineWidth * 1.15,
            }}
          />
        </div>
      </div>
      <div className="py-4">
        {tabsData.map((tab, i) =>
          i === activeTabIndex ? (
            <div
              key={i}
              className={`${
                i === activeTabIndex ? "opacity-100" : "opacity-0"
              }  transition-opacity duration-200`}
            >
              {i === activeTabIndex && (
                <p className="lg:hidden block text-primary font-[500] text-[17px] underline">
                  {tab.label}
                </p>
              )}
              {i === activeTabIndex && (
                <div className="flex lg:flex-row flex-col flex-col-reverse justify-between mt-8">
                  <div>{tab.content}</div>
                  <div
                    className="lg:w-[422px] h-[249px] duration-[5s] transition-colors mb-6 lg:mb-0"
                    style={{
                      backgroundColor: tab.img,
                    }}
                  ></div>
                </div>
              )}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
