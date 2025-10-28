const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-end Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'SQL', 'Authentication'],
      icon: '🗄️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Wireframing'],
      icon: '🎨',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Testing', 'DevOps'],
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className={`text-6xl mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-primary-50 dark:bg-dark-200 text-primary-700 dark:text-primary-400 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-dark-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

