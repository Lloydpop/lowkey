import { Accordion } from "../../../../components";

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
  const accordionItems = [
    {
      title: "How does Primus work?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras massa ante in quis ut libero elementum ac dolor. Amet viverra ultrices enim mauris sollicitudin hendrerit. Iaculis ut phasellus vestibulum quis leo malesuada. Nulla neque libero aliquam elit magna at ante et odio. Posuere sit sit dis facilisis turpis blandit nibh in.",
    },
    {
      title: "Is it safe to use Primus?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras massa ante in quis ut libero elementum ac dolor. Amet viverra ultrices enim mauris sollicitudin hendrerit. Iaculis ut phasellus vestibulum quis leo malesuada. Nulla neque libero aliquam elit magna at ante et odio. Posuere sit sit dis facilisis turpis blandit nibh in.",
    },
    {
      title: "Can i track my transfer?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras massa ante in quis ut libero elementum ac dolor. Amet viverra ultrices enim mauris sollicitudin hendrerit. Iaculis ut phasellus vestibulum quis leo malesuada. Nulla neque libero aliquam elit magna at ante et odio. Posuere sit sit dis facilisis turpis blandit nibh in.",
    },
    {
      title: "Are there any hidden fees with Primus?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras massa ante in quis ut libero elementum ac dolor. Amet viverra ultrices enim mauris sollicitudin hendrerit. Iaculis ut phasellus vestibulum quis leo malesuada. Nulla neque libero aliquam elit magna at ante et odio. Posuere sit sit dis facilisis turpis blandit nibh in.",
    },
  ];
  return (
    <div className="lg:mt-44 mt-24 flex lg:justify-center flex-col lg:items-center gap-y-6">
      <div className="lg:text-center text-start">
        <p className="text-secondary mb-2 mt-8 text-[14px] font-bold">FAQ's</p>
        <h1 className="lg:text-[40px] text-[24px] font-montserrat">
          Got Questions?
        </h1>
      </div>
      <div className="lg:w-[600px] w-full">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};
export default FAQ;
