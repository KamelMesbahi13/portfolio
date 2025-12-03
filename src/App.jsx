import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/Ui/ScrollToTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
