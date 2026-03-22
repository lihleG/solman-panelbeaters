// src/components/Testimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Thabo M.",
    location: "Client from Potchefstroom",
    quote:
      "Excellent service from Solman Panel Beaters and Mechanics. My car was badly damaged after an accident, but they repaired it perfectly. The team was professional and kept me updated throughout the process.",
  },
  {
    name: "Lerato K.",
    location: "Client from Klerksdorp",
    quote:
      "I had serious engine problems and they fixed everything quickly and at a fair price. My car runs like new again. I highly recommend them for anyone looking for reliable mechanics.",
  },
  {
    name: "Sibusiso D.",
    location: "Client from Carletonville",
    quote:
      "Great workmanship and friendly service. They did panel beating and spray painting on my car, and the results were amazing. You can really trust them with your vehicle.",
  },
];

const Testimonials = () => {
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
          What Our Customers Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We take pride in delivering quality repairs and excellent customer
          service. Here’s what some of our clients have to say.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6 transition-shadow"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-blue-400 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-gray-600 mb-4">
                “{testimonial.quote}”
              </p>

              <div>
                <p className="font-semibold text-blue-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;