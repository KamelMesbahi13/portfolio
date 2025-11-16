import Img from "../../../assets/mypic.png";

const HomeAbout = () => {
  return (
    <div className="mt-20">
      <div className="container">
        <div>
          <h1>MERN Developer, WordPress Creator & Digital Builder</h1>
        </div>
        <div>
          <div className="flex flex-row-reverse content-center justify-between">
            <div className="w-1/4">
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  reiciendis, odio in velit consequatur ullam illum vero sequi
                  explicabo aliquam?
                </p>
              </div>
              <div>
                <img src={Img} alt="" />
                <img src={Img} alt="" />
              </div>
            </div>
            <div className="w-1/2">
              <img src={Img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
