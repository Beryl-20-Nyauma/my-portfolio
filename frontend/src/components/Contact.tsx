import { TwitterIcon, LinkedInIcon } from './SocialIcons';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'berylnyauma@gmail.com',
      link: 'mailto:berylnyauma@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+254706805648',
      link: 'tel:+254706805648',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Nairobi, Kenya',
      link: '#',
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', component: <LinkedInIcon />, url: '#' },
    { name: 'Twitter', component: <TwitterIcon />, url: '#' },
  ];

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <div className="text-sm text-gray-400 mb-1">
                  {info.label}
                </div>
                <div className="font-semibold text-white">
                  {info.value}
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="card">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 border border-gold-500/20 hover:bg-gold-500 hover:text-black text-gold-500 transition-all duration-300 hover:scale-110"
                title={social.name}
              >
                {social.component}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
