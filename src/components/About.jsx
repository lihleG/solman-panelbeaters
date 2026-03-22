// src/components/About.jsx
import { motion } from "framer-motion";
import aboutImage from "../images/solmon 2.jpeg"; // rename file to solmon2.jpeg (remove space)

const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Comprehensive care by <br />
            <span className="text-blue-700">experts with convenience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg mb-6 leading-relaxed"
          >
            Solman panel beaters and mechanics. We do repair all types of cars
            from accident damaged and engine damaged with great results.
            Customer satisfaction comes first to us.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 mb-8"
          >
            Our state‑of‑the‑art equipment and personalised service ensure your
            vehicle receives the highest quality care. Trust our experts to get
            you back on the road safely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105">
              Discover More
            </button>
          </motion.div>
        </div>

        {/* Animated Image */}
        <div className="flex-1">
          <motion.img
            src={aboutImage}
            alt="Solman Panel Beaters workshop"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            style={{ maxHeight: "450px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;