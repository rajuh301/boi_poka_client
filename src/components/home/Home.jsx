import Navbar from "../shaired/Navbar";
import Carusol from "../pages/Carusol";
import SecondNav from "../shaired/SecondNav";
import PopularWriterSection from "./popularWriter/PopularWriterSection";
import SocialBar from "../shaired/socialBar/SocialBar";
import NavbarThird from "../shaired/thirdNavbar/NavbarThird";
import PopularBookSection from "./popularBookSection/PopularBookSection";
import TranslatedBookSection from "./TranslatedBookSection/TranslatedBookSection";
import NovelSection from "./novelSection/NovelSection";
import MotivetionalBookSection from "./motivationalSection/MotivetionalBookSection";
import ScienceFictionSection from "./scienceFictionSection/ScienceFictionSection";

const Home = () => {
  return (
    <div>
      <Carusol></Carusol>
      <PopularWriterSection></PopularWriterSection>
      <PopularBookSection></PopularBookSection>
      <TranslatedBookSection></TranslatedBookSection>
      <NovelSection></NovelSection>
      <ScienceFictionSection></ScienceFictionSection>
      <MotivetionalBookSection></MotivetionalBookSection>
    </div>
  );
};

export default Home;
