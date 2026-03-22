// src/pages/GalleryPage.jsx
import Carousel from "../components/Carousel";
import gallery1 from "../images/recent1.jpeg";
import gallery2 from "../images/recent2.jpeg";
import gallery3 from "../images/recent3.jpeg";
import gallery4 from "../images/recent4.jpeg";
import gallery5 from "../images/recent5.jpeg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const GalleryPage = () => {
  return (
    <>
      <section className="bg-gray-50 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Recent Work</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a look at some of the vehicles we've restored and repaired.
        </p>
      </section>

      <div className="py-12 px-4 bg-white">
        <Carousel images={images} />
      </div>

      {/* Optional: Grid of thumbnails below the carousel */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">View All Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-40 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;