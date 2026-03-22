// src/components/SkilledServices.jsx
import { motion } from "framer-motion";

const servicesList = [
  "Panel Beating & Chassis Straightening",
  "Spray Painting & Colour Matching",
  "Mechanical Repairs",
  "Auto Electrical Services",
  "Accident Damage Repair",
  "Engine Diagnostics",
  "Towing Services",
  "Customer Satisfaction Guarantee",
];

const SkilledServices = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Trust Your Car to Our <br />
              <span className="text-blue-700">Skilled Technicians</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-600 text-lg mb-8"
            >
              With years of experience and state‑of‑the‑art equipment, we deliver
              quality repairs that you can trust. From minor scratches to major
              accident damage, we handle it all.
            </motion.p>
          </div>

          {/* Right side – two-column list */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesList.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilledServices;