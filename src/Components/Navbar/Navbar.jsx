import Logo from "../../assets/kmLogowhite.png";

// const inputStyles = ``;

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between text-white border-b border-white ">
          <div>
            <div className="flex items-center ">
              <div>
                <img src={Logo} alt="Logo" className="w-16" />
              </div>
              <div className="ml-6 font-medium">
                <h6>Web Developer / Web Designer </h6>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="cursor-pointer group">
              <p className="text-sm text-white transition-all duration-300 group-hover:text-[#F87B1B] group-hover:-translate-y-1">
                Works
              </p>
              <div className="h-0.5 w-0 bg-[#F87B1B] transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="mx-8 cursor-pointer group">
              <p className="text-sm text-white transition-all duration-300 group-hover:text-[#F87B1B] group-hover:-translate-y-1">
                About
              </p>
              <div className="h-0.5 w-0 bg-[#F87B1B] transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="cursor-pointer group">
              <p className="text-sm text-white transition-all duration-300 group-hover:text-[#F87B1B] group-hover:-translate-y-1">
                Contact
              </p>
              <div className="h-0.5 w-0 bg-[#F87B1B] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
