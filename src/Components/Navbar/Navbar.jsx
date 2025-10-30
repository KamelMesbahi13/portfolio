import Logo from "../../assets/kmLogo.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between border-b border-black">
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
          <div>
            <p className="text-sm">Works</p>
          </div>
          <div className="mx-2">
            <p className="text-sm">About</p>
          </div>
          <div>
            <p className="text-sm">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
