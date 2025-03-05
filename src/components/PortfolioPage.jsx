import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
          Hello! I’m Utsav Changani, a dedicated Computer Programmer & AI Developer with a passion for building intelligent, user-centric applications. Graduating from George Brown College and backed by 3+ years of full-stack development experience, I’ve co-founded innovative projects like BEGLZ AI—a highly accurate meal scanning app—and VitaE, an NLP-powered resume builder deployed to over 500 users.
            I’m continuously expanding my expertise in advanced AI research, exploring areas such as recursive neural network optimization and emergent behaviors in large language models. Driven by a commitment to innovation and lifelong learning, I strive to create robust digital solutions that push the boundaries of technology.

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
