const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          I'm a passionate <span className="font-semibold text-black">Graphic Designer</span> with a love for crafting
          visually stunning designs that tell stories and evoke emotion. With years of experience in branding, UI/UX, and
          print media, I bring a creative yet strategic approach to every project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Experience</h3>
            <p className="text-gray-600">
              Over 3 years of hands-on experience in freelance and agency environments, working with global clients and delivering results-driven designs.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Tools I Use</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
              <li>InDesign</li>
              <li>Canva Pro</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
