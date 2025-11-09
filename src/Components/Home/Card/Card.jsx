import mypic from "../../../assets/mypic.png";

const Card = () => {
  return (
    <div className="w-full mb-4 lg:sticky md:mb-0 lg:top-32 h-fit">
      <div className="p-6 bg-white shadow-2xl rounded-3xl">
        <div className="relative mb-6">
          <div className="overflow-hidden bg-secondColor aspect-square rounded-2xl">
            <img
              src={mypic}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Decorative dashed line */}
          <div className="absolute w-20 h-20 border-2 border-dashed rounded-full border-secondColor -top-4 -right-4"></div>
        </div>
        {/* Name */}
        <p className="mb-4 text-2xl font-semibold text-black md:text-4xl">
          Mesbahi Kamel
        </p>

        <div>
          <p className="text-sm text-black md:text-base">
            A Software Engineer who has developed countless innovative
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
