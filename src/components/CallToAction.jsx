// src/components/CallToAction.jsx
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Need Your Car Repaired?
          <br />
          We’ve Got You Covered
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-blue-100 max-w-2xl mx-auto mb-8"
        >
          At Solman Panel Beaters and Mechanics, we repair all types of vehicles,
          including accident-damaged and engine-damaged cars. We deliver reliable,
          high-quality results with customer satisfaction as our top priority.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="tel:0844298065"
            className="inline-block bg-white text-blue-900 font-semibold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Call Now: 084 429 8065
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;