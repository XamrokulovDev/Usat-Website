import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Kafedra from "../components/Kafedra";
import PartnerLogoSlider from "../components/PartnerLogoSlider";
import StudentFeedback from "../components/StudentFeedback";
import News from "../components/News";
import PopularNews from "../components/PopularNews";
import TeamSection from "../components/TeamSection";
import { useState } from "react";

const Home = () => {
  const [currentNewsIds, setCurrentNewsIds] = useState<number[]>([]);
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
      <PopularNews onVisibleNewsChange={setCurrentNewsIds} />
      <News hiddenIds={currentNewsIds} />
      <PartnerLogoSlider />
    </div>
  );
};

export default Home;
