import Card from "../Card/Card";
import HeroFirstContent from "../HeroFirstContent/HeroFirstContent";

const PortfolioPage = () => {
  return (
    <div className="container">
      <div className="pt-24 mx-auto">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
          <div className="flex-shrink-0 w-full lg:w-80">
            <Card />
          </div>

          <div className="flex-1 space-y-16">
            <HeroFirstContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
