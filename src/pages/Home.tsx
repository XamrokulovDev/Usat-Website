import About from "../components/About";
import Achievements from "../components/Achievements";
import Header from "../components/Header";
import Kafedra from "../components/Kafedra";
import TeamSection from "../components/TeamSection";

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Kafedra />
        <TeamSection />
        <Achievements />
    </div>
  )
}

export default Home;