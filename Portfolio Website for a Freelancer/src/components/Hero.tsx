// src/components/Hero.jsx
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-0 px-8 md:px-24 py-20 bg-white">
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left py-10 md:py-20 px-4 md:px-10 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Alex Carter</h1>
        <p className="text-gray-600 mb-6">
          I'm a graphic designer with over five years of experience in crafting visually compelling designs that tell a story. My passion lies in blending creativity with functionality to deliver impactful solutions that resonate with audiences. Whether it's branding, web design, or digital illustrations, I strive to bring ideas to life with precision and artistry.
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
          className="w-95 h-95 rounded-full mx-auto shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
