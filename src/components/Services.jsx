// src/components/Services.jsx
import { motion } from "framer-motion";

const services = [
  {
    title: "Accident Repair Services",
    description:
      "We repair all types of accident-damaged vehicles with precision and care. Our team ensures your car is restored to its best condition with high-quality workmanship and reliable results.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    title: "Engine Repairs and Maintenance",
    description:
      "From minor fixes to major engine repairs, we handle all engine-related issues. We focus on delivering long-lasting solutions to keep your vehicle running smoothly.",
    buttonText: "Learn More",
    link: "#",
  },
  {
    title: "Panel Beating and Body Work",
    description:
      "Our panel beating services restore your vehicle’s body after damage. We take pride in delivering excellent finishes while putting customer satisfaction first.",
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
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Let us restore your vehicle <br />
          <span className="text-blue-700">
            with expert care and precision
          </span>
        </motion.h2>

        {/* Business Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Solman Panel Beaters and Mechanics repairs all types of vehicles,
          including accident-damaged and engine-damaged cars. We are committed
          to delivering great results, with customer satisfaction as our top
          priority.
        </motion.p>

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
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
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

        {/* Contact Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h3>
          <p className="text-gray-600 mb-2">
            📍 12414 Mogolodi Street, Ikageng, Potchefstroom, North West
          </p>
          <p className="text-gray-600 mb-2">
            📞 084 429 8065
          </p>
          <p className="text-gray-600">
            Serving North West, Gauteng and Free State (Klerksdorp,
            Ventersdorp, Carletonville, Parys)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;