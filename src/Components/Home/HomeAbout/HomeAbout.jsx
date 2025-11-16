import Img from "../../../assets/mypic.png";

const HomeAbout = () => {
  return (
    <div className="mt-20">
      <div className="container">
        <div>
          <h1>MERN Developer, WordPress Creator & Digital Builder</h1>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="w-[40%] mt-80">
              <img src={Img} alt="" />
            </div>

            <div className="w-6/12">
              <div className="mt-8">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  reiciendis, odio in velit consequatur ullam illum vero sequi
                  explicabo aliquam?
                </p>
              </div>
              <div>
                <div className="flex justify-between mt-10 ">
                  <img className="w-[49%] rounded-lg" src={Img} alt="" />
                  <img className="w-[49%] rounded-lg" src={Img} alt="" />
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
