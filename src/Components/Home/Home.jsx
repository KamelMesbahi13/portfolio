import { lazy, Suspense } from "react";

import PortfolioPage from "./PortfolioPage/PortfolioPage";
import ModernLoader from "../Ui/ModernLoader";

const HomeAbout = lazy(() => import("./HomeAbout/HomeAbout"));
const RecentWork = lazy(() => import("./RecentWork/RecentWork"));
const MyQualityServices = lazy(() =>
  import("./MyQualityServices/MyQualityServices")
);
const Technologies = lazy(() => import("./Technologies/Technologies"));
const Questions = lazy(() => import("./Questions/Questions"));
const HomeContactUs = lazy(() => import("./HomeContactUs/HomeContactUs"));

// Import your new loader

const Home = () => (
  <div>
    {/* 1. Hero loads instantly */}
    <PortfolioPage />

    {/* 2. The rest loads in the background with a fallback */}
    <Suspense fallback={<ModernLoader />}>
      <HomeAbout />
      <MyQualityServices />
      <RecentWork />
      <Technologies />
      <Questions />
      <HomeContactUs />
    </Suspense>
  </div>
);

export default Home;
