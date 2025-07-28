import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Kafedra from "../components/Kafedra";
import PartnerLogoSlider from "../components/PartnerLogoSlider";
import StudentFeedback from "../components/StudentFeedback";
import TeamSection from "../components/TeamSection";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Kafedra />
      <TeamSection />
      <Achievements />
      <StudentFeedback />
      <Contact />
      <FAQ />
      <PartnerLogoSlider />
    </div>
  );
};

export default Home;
