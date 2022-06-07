import { Helmet } from "react-helmet-async";
import HeroSection from "../components/joinusSection/HeroSection";
import AimSection from "../components/joinusSection/AimSection";
import IntroSection from "../components/joinusSection/IntroSection";
import AchivedSection from "../components/joinusSection/AchivedSection";
import BenefitsSection from "../components/joinusSection/BenefitsSection";
import FormSection from "../components/joinusSection/FormSection";

const JoinUs = () => {
  return (
    <>
      <Helmet>
        <title>Board | Easypaper</title>
      </Helmet>

      <div>
        <HeroSection />

        <AimSection />

        {/* <IntroSection />

        <AchivedSection /> */}

        <BenefitsSection />

        <FormSection />
      </div>
    </>
  );
};

export default JoinUs;
