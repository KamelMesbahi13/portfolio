const HeroFirstContent = () => {
  return (
    <div className="space-y-12">
      <div>
        {/* Large stacked text */}
        <div className="mb-3 md:mb-8">
          <div className="flex flex-col -space-y-4 leading-none">
            <div className="text-5xl md:text-6xl lg:text-6xl xl:text-[6rem] font-black tracking-tighter">
              <span className="text-white">WEB</span>
            </div>
            <div className="text-5xl !-mt-[10px] md:text-6xl lg:text-6xl xl:text-[6rem] font-black tracking-tighter">
              <span className="text-gray-800">DEVELOPER</span>
            </div>
          </div>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-gray-400 lg:text-lg">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 pt-0 md:pt-12 lg:gap-12">
        <div>
          <div className="mb-2 text-4xl font-black text-white md:text-5xl lg:text-7xl">
            +12
          </div>
          <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
            YEARS OF
            <br />
            EXPERIENCE
          </div>
        </div>
        <div>
          <div className="mb-2 text-4xl font-black text-white md:text-5xl lg:text-7xl">
            +46
          </div>
          <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
            PROJECTS
            <br />
            COMPLETED
          </div>
        </div>
        <div>
          <div className="mb-2 text-4xl font-black text-white md:text-5xl lg:text-7xl">
            +20
          </div>
          <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
            WORLDWIDE
            <br />
            CLIENTS
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFirstContent;
