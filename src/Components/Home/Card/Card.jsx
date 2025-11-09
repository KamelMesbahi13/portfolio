const Card = () => {
  return (
    <div className="w-full lg:sticky lg:top-32 h-fit">
      <div className="p-6 bg-white shadow-2xl rounded-3xl">
        {/* Profile Image with orange background */}
        <div className="relative mb-6">
          <div className="overflow-hidden bg-orange-600 aspect-square rounded-2xl">
            {/* Replace this with actual image */}
            <img
              src="/api/placeholder/400/400"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Decorative dashed line */}
          <div className="absolute w-20 h-20 border-2 border-orange-500 border-dashed rounded-full -top-4 -right-4"></div>
        </div>

        {/* Video Tutorial Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-bold text-white bg-red-600 rounded-full">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
          </svg>
          Video Tutorial
        </div>

        {/* Name */}
        <h2 className="mb-4 text-4xl font-black text-black">Adbid Ahmed</h2>

        {/* Fire Icon */}
        <div className="inline-flex items-center justify-center bg-orange-100 rounded-full w-14 h-14">
          <span className="text-3xl">🔥</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
