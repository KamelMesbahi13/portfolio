// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import PortfolioPage from "./PortfolioPage/PortfolioPage";

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 10 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <PortfolioPage />
  </motion.div>
);

export default Home;
