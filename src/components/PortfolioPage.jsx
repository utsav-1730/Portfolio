import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO AM I?</h2>
          <p className="text-lg leading-relaxed">
          Hello! I’m Utsav Changani, a Computer Programmer & AI Developer with 3+ years of full-stack development experience, passionate about creating intelligent, user-centric applications. I've co-founded projects like BEGLZ AI and VitaE, leveraging advanced AI techniques to develop innovative solutions, 
          while continuously expanding my expertise in machine learning, NLP, and AI research.

          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
