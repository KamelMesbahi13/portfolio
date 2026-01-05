// import { lazy, Suspense } from "react";

// import PortfolioPage from "./PortfolioPage/PortfolioPage";
// import ModernLoader from "../Ui/ModernLoader";

// const HomeAbout = lazy(() => import("./HomeAbout/HomeAbout"));
// const RecentWork = lazy(() => import("./RecentWork/RecentWork"));
// const MyQualityServices = lazy(() =>
//   import("./MyQualityServices/MyQualityServices")
// );
// const Technologies = lazy(() => import("./Technologies/Technologies"));
// const Questions = lazy(() => import("./Questions/Questions"));
// const HomeContactUs = lazy(() => import("./HomeContactUs/HomeContactUs"));

// const Home = () => (
//   <div>
//     <PortfolioPage />
//     <Suspense fallback={<ModernLoader />}>
//       <HomeAbout />
//       <MyQualityServices />
//       <RecentWork />
//       <Technologies />
//       <Questions />
//       <HomeContactUs />
//     </Suspense>
//   </div>
// );

// export default Home;

import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

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

const Home = () => {
  const location = useLocation();

  // Handle scroll from navigation state (when coming from other pages)
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Longer delay because of lazy loading
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // 300ms to ensure lazy components are loaded

      // Clear the state to prevent re-scrolling on refresh
      window.history.replaceState({}, document.title);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div>
      <PortfolioPage />
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
};

export default Home;
