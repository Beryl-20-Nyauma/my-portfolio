const Gallery = () => {
  const galleryImages = [
    { src: '/gallery-1.jpg', alt: 'Gallery Image 1' },
    { src: '/gallery-2.jpg', alt: 'Gallery Image 2' },
    { src: '/gallery-3.jpg', alt: 'Gallery Image 3' },
    { src: '/gallery-4.jpg', alt: 'Gallery Image 4' },
    { src: '/gallery-5.jpg', alt: 'Gallery Image 5' },
    { src: '/gallery-6.jpg', alt: 'Gallery Image 6' },
  ];

  return (
    <section id="gallery" className="section-padding bg-gray-50 dark:bg-dark-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Photo <span className="gradient-text">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

