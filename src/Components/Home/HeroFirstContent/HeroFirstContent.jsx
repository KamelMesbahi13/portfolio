const HeroFirstContent = () => {
  return (
    <div className="space-y-12">
      <div>
        {/* Large stacked text */}
        <div className="mb-8">
          <div className="flex flex-col -space-y-4 leading-none">
            <div className="text-3xl md:text-3xl lg:text-4xl xl:text-[8rem] font-black tracking-tighter">
              <span className="text-white">SOFTWARE</span>
            </div>
            <div className="text-2xl md:text-3xl !mt-10 lg:text-4xl xl:text-[8rem] font-black tracking-tighter">
              <span className="text-gray-800">ENGINEER</span>
            </div>
          </div>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-gray-400 lg:text-lg">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 pt-12 lg:gap-12">
        <div>
          <div className="mb-2 text-5xl font-black text-white lg:text-7xl">
            +12
          </div>
          <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
            YEARS OF
            <br />
            EXPERIENCE
          </div>
        </div>
        <div>
          <div className="mb-2 text-5xl font-black text-white lg:text-7xl">
            +46
          </div>
          <div className="text-xs font-medium tracking-wide text-gray-500 uppercase lg:text-sm">
            PROJECTS
            <br />
            COMPLETED
          </div>
        </div>
        <div>
          <div className="mb-2 text-5xl font-black text-white lg:text-7xl">
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
