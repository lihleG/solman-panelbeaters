// src/components/Services.jsx
import { motion } from "framer-motion";

const services = [
  {
    title: "Preventative Maintenance",
    description:
      "Et curae sagittis conubia accumsan sodales curabitur molestie iaculis. Blandit justo cubilia adipiscing faucibus tempor etiam.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    title: "Brake Repair & Services",
    description:
      "Et curae sagittis conubia accumsan sodales curabitur molestie iaculis. Blandit justo cubilia adipiscing faucibus tempor etiam.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    title: "Transmission Services",
    description:
      "Et curae sagittis conubia accumsan sodales curabitur molestie iaculis. Blandit justo cubilia adipiscing faucibus tempor etiam.",
    buttonText: "Learn More",
    link: "#",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Let us handle the dirty work <br />
          <span className="text-blue-700">so you don’t have to</span>
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href={service.link}
                className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
              >
                {service.buttonText}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;