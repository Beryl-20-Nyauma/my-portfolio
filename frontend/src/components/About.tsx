const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Welcome to my portfolio! I'm a passionate software developer with a love for creating
              beautiful and functional applications. With experience in both front-end and back-end
              development, I bring ideas to life through clean code and innovative design.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in creating responsive, user-friendly interfaces that provide exceptional
              user experiences. When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
            </p>
            <p className="text-lg leading-relaxed">
              Let's work together to bring your vision to life!
            </p>
            <div className="pt-6">
              <a href="#contact" className="btn-primary inline-block">
                Let's Connect
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

