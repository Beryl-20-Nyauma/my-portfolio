const Footer = () => {
  return (
    <footer className="bg-dark-100 dark:bg-dark-50 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Beryl Nyauma</h3>
          <p className="text-gray-400 mb-6">
            Building exceptional digital experiences, one line of code at a time.
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Beryl Nyauma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

