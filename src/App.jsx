import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/Ui/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen ">
        <Navbar />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/aboutme" element={<AboutUs />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
