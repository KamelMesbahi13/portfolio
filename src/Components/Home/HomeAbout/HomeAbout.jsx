import Img from "../../../assets/mypic.png";
import WebDev from "../../../assets/webdev.png";
import Design from "../../../assets/design.png";
import DarkVeil from "../../Ui/DarkVeil/DarkVeil";

const HomeAbout = () => {
  return (
    <div className="mt-20">
      <div className="container">
        <div>
          <h1>MERN Developer, WordPress Creator & Digital Builder</h1>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="w-[40%] mt-64">
              <img src={Img} alt="" />
            </div>

            <div className="w-6/12">
              <div className="mt-8">
                <p>
                  I’m Kamel Mesbahi — a passionate MERN developer and WordPress
                  creator with a strong focus on clean design, fast performance,
                  and real business results. With years of freelance experience,
                  I build modern websites, custom plugins, e-commerce platforms,
                  and digital experiences tailored for brands and entrepreneurs.
                  From crafting unique logos and social media visuals to
                  developing full web solutions through my agency Digital Team,
                  my mission is simple: turn ideas into powerful digital tools
                  that help people grow.
                </p>
              </div>
              <div>
                <div className="flex justify-between mt-10 ">
                  <img className="w-[49%] rounded-lg" src={WebDev} alt="" />
                  <img className="w-[49%] rounded-lg" src={Design} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
