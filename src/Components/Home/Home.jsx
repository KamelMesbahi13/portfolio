import PortfolioPage from "./PortfolioPage/PortfolioPage";
import RecentWork from "./RecentWork/RecentWork";
import MyQualityServices from "./MyQualityServices/MyQualityServices";
import Technologies from "./Technologies/Technologies";
import HomeAbout from "./HomeAbout/HomeAbout";

const Home = () => (
  <div>
    <PortfolioPage />
    {/* <HomeAbout /> */}
    <MyQualityServices />
    <RecentWork />
    {/* <Technologies /> */}
  </div>
);

export default Home;
