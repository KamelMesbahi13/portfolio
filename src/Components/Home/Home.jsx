import PortfolioPage from "./PortfolioPage/PortfolioPage";
import RecentWork from "./RecentWork/RecentWork";
import MyQualityServices from "./MyQualityServices/MyQualityServices";
import Technologies from "./Technologies/Technologies";
import HomeAbout from "./HomeAbout/HomeAbout";
import Questions from "../Questions/Questions";

const Home = () => (
  <div>
    <PortfolioPage />
    <HomeAbout />
    <MyQualityServices />
    <RecentWork />
    <Technologies />
    <Questions />
  </div>
);

export default Home;
