// src/components/Hero.jsx
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-0 px-25 py-20 bg-white">
      <div className="flex flex-col items-center justify-center text-center py-20 px-10 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Alex Carter</h1>
        <p className="text-gray-600 mb-6">
          I'm a graphic designer passionate about creating visually stunning designs that communicate ideas effectively.
        </p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white px-6 py-2 rounded transition mb-8 hover:bg-blue-800">
            Download Resume
            </button>
        </a>
      </div>
      <div className="flex-1">
        <img
          src="/profile_pic.jpg" // Place your image in public/profile.jpg
          alt="Profile"
          className="w-64 h-64 rounded-full mx-auto shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
