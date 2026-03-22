// src/pages/AboutPage.jsx
import { motion } from "framer-motion";
import aboutImage from "../images/solmon 2.jpeg";

const AboutPage = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-700 font-semibold mb-4"
          >
            Respecting your love and emotion, we take care of your car like our own family.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 text-lg mb-6 leading-relaxed"
          >
            Solman panel beaters and mechanics. We do repair all types of cars
            from accident damaged and engine damaged with great results.
            Customer satisfaction comes first to us.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 mb-8"
          >
            Our state‑of‑the‑art equipment and personalised service ensure your
            vehicle receives the highest quality care. Trust our experts to get
            you back on the road safely.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-700">88K+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-700">96%</p>
              <p className="text-sm text-gray-600">Completed Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-700">123K+</p>
              <p className="text-sm text-gray-600">Product Sold</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-700">24+</p>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="Solman Panel Beaters workshop"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;