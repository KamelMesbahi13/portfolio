import Card from "../Card/Card";
import HeroFirstContent from "../HeroFirstContent/HeroFirstContent";

const PorfolioPage = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Main Content */}
      <div className="pt-24 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
          {/* Left Side - Sticky Card */}
          <div className="flex-shrink-0 w-full lg:w-80">
            <Card />
          </div>

          {/* Right Side - Scrollable Content */}
          <div className="flex-1 space-y-16">
            {/* Hero Section */}
            <HeroFirstContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorfolioPage;
