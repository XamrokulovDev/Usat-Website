import About from "../components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Kafedra from "../components/Kafedra";
import StudentFeedback from "../components/StudentFeedback";
import News from "../components/News";
import PopularNews from "../components/PopularNews";
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
      <PopularNews />
      <News />
    </div>
  );
};

export default Home;
