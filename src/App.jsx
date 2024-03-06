import styles from "./style";
import {
  Navbar,
  HeroSection,
  StatsSection,
  PortfolioSection,
  TestimonialSection,
  ServicesSection,
  ProcessSection,
  PricingSection,
  FaqSection,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <HeroSection />
      </div>
    </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <StatsSection/>
        <PortfolioSection/>
        <TestimonialSection/>
        <ServicesSection/>
        <ProcessSection/>
        <PricingSection/>
        <FaqSection/>
        <Footer/>
      </div>
      </div>
    </div>
  );
}

export default App;
