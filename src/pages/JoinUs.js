import { Helmet } from "react-helmet-async";
import HeroSection from "../components/joinusSection/HeroSection";
import AimSection from "../components/joinusSection/AimSection";
import BenefitsSection from "../components/joinusSection/BenefitsSection";
import FormSection from "../components/joinusSection/FormSection";

const JoinUs = () => {
  return (
    <>
      <Helmet>
        <title>Join Us | Easypaper</title>
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
