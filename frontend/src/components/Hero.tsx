const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gold-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gold-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gold-500 font-semibold mb-4 animate-fade-in">
              Hello, I'm Beryl
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-white">
              <span className="gradient-text">Beryl</span> <span className="text-white">Nyauma</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 animate-slide-up-delay">
              Software Developer
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl animate-fade-in-delay">
              Creating beautiful and functional web experiences with modern technologies.
              Passionate about clean code, innovative design, and exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-delay-2">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-1 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-2xl opacity-50"></div>
              <img
                src="/profile-photo.jpg"
                alt="Beryl Nyauma"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-gold-500 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

