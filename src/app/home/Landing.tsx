import ClientSays from "./components/ClientSays/ClientSays";
import FAQ from "./components/FAQ/FAQ";
import GetStarted from "./components/GetStarted/GetStarted";
import { Hero } from "./components/Hero";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";
import { Services } from "./components/Services/Services";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div>
      <div className="lg:px-[70px] px-6">
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Services />
      </div>

      <ClientSays />
      <div className="lg:px-[70px] px-6 ">
        <FAQ />
        <GetStarted />
      </div>
    </div>
  );
};
export default LandingPage;
