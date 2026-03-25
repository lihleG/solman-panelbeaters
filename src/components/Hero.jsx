// src/components/Hero.jsx
import { motion } from "framer-motion";
import heroImage from "../images/solmon1.jpeg";

const Hero = () => {
  const openCalendly = () => {
    const calendlyUrl = 'https://calendly.com/solmanpanel/30min';
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      window.open(calendlyUrl, '_blank');
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Your Trusted Partner <br />
            <span className="text-blue-700">For All Your Auto Needs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl"
          >
            From routine maintenance to major repairs, we’ve got you covered. 
            Quality workmanship, customer satisfaction, and affordable rates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <button
              onClick={openCalendly}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition duration-300 transform hover:scale-105"
            >
              Get Free Quotes
            </button>
          </motion.div>
        </div>

        {/* Animated image */}
        <div className="flex-1 hidden md:block">
          <motion.img
            src={heroImage}
            alt="Solman Panel Beaters workshop"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;