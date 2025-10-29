import Logo from "../../assets/kmLogo.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between ">
        <div>
          <div className="flex items-center ">
            <div>
              <img src={Logo} alt="Logo" className="w-16" />
            </div>
            <div>
              <p>Web Developer / Web Designer </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-5xl">ff</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
