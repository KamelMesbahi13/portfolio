import Logo from "../../assets/kmLogo.png";

const Navbar = () => {
  return (
    <div className="container">
      <div>
        <img src={Logo} alt="Logo" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Navbar;
