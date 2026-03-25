import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "High-Quality Workmanship",
    description:
      "We take pride in delivering top-quality repairs on every vehicle. From accident damage to engine issues, we ensure every job is done with precision and care.",
    icon: (
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Experienced and Reliable Team",
    description:
      "Our team has the skills and experience to handle all types of vehicle repairs. We work efficiently while maintaining high standards you can trust.",
    icon: (
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction First",
    description:
      "We are committed to making sure every customer leaves satisfied. We offer honest service, fair pricing, and reliable results you can depend on.",
    icon: (
      <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  const [showCallConfirm, setShowCallConfirm] = useState(false);
  const phoneNumber = "0844298065";

  const handleCallClick = () => {
    setShowCallConfirm(true);
  };

  const confirmCall = () => {
    setShowCallConfirm(false);
    window.location.href = `tel:${phoneNumber}`;
  };

  const cancelCall = () => {
    setShowCallConfirm(false);
  };

  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Column */}
            <div className="flex-1 lg:sticky lg:top-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Why Choose Us <br />
                <span className="text-blue-700">
                  Solman Panel Beaters and Mechanics
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 text-lg mb-8"
              >
                We are dedicated to providing reliable vehicle repairs with a
                strong focus on quality and customer satisfaction. Whether it’s
                accident damage or engine repairs, you can trust us to get the job
                done right.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <button
                  onClick={handleCallClick}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105"
                >
                  Call Now
                </button>
              </motion.div>
            </div>

            {/* Right Column - Features */}
            <div className="flex-1">
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showCallConfirm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={cancelCall}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Solman Panel Beaters?</h3>
                <p className="text-gray-600 mb-6">
                  Would you like to call <strong className="text-blue-700">{phoneNumber}</strong>?
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={cancelCall}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmCall}
                    className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                  >
                    Call Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhyChooseUs;