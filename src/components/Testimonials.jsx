// src/components/Testimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Henry Walley",
    location: "Client from Bogor",
    quote:
      "Best car repair service I've ever used! Autorizen's mechanics are skilled, and the customer service is excellent. They even gave me tips to maintain my car better. Definitely my go-to service shop from now on!",
  },
  {
    name: "William Hall",
    location: "Client from Jakarta",
    quote:
      "I had a weird noise coming from my engine, and Autorizen diagnosed the problem in minutes. Affordable prices and top-notch service. I'm glad I found a repair shop I can trust. Thanks, Autorizen!",
  },
  {
    name: "Maggie Ulrey",
    location: "Client from Bali",
    quote:
      "Autorizen saved the day! My car broke down, and they fixed it super fast. Great service, friendly staff, and fair pricing. Now my car runs like new. Highly recommend them for any car troubles.",
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
          What they're saying about our services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Posuere rutrum consectetur et nec in non quis sociosqu eget primis.
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
                {/* Quote icon optional */}
                <svg
                  className="w-8 h-8 text-blue-400 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">“{testimonial.quote}”</p>
              <div>
                <p className="font-semibold text-blue-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;