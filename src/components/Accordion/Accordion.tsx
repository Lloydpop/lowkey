"use client";
import React, { useState } from "react";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`mt-9 relative cursor-pointer lg:text-[20px] font-montserrat ${
              activeIndex === index ? "text-primary font-[600]" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            {activeIndex === index ? (
              <span className="absolute right-0 top-0">
                <ArrowUp2 className="w-5 h-5" />
              </span>
            ) : (
              <span className="absolute right-0 top-0">
                <ArrowDown2 className="w-5 h-5" />
              </span>
            )}
          </div>

          <div
            className={`border-b border-b-gray-300 mt-6 text-gray-500 text-[16px]  overflow-hidden duration-200  ${
              activeIndex === index ? "h-auto pb-6" : "h-0"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
