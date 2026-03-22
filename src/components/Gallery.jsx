// src/components/Gallery.jsx
import { motion } from "framer-motion";
import Carousel from "./Carousel"; // reuse the carousel component
import gallery1 from "../images/recent1.jpeg";
import gallery2 from "../images/recent2.jpeg";
import gallery3 from "../images/recent3.jpeg";
import gallery4 from "../images/recent4.jpeg";
import gallery5 from "../images/recent5.jpeg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const Gallery = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Recent Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          See some of our recent repairs and restorations.
        </motion.p>

        {/* Carousel */}
        <div className="mb-12">
          <Carousel images={images} />
        </div>

        {/* Optional: quick thumbnail preview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={img}
                alt={`Recent work ${idx + 1}`}
                className="w-full h-24 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;