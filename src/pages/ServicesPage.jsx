// src/pages/ServicesPage.jsx
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import serviceImg1 from "../images/solman3.jpeg";
import serviceImg2 from "../images/solman4.jpeg";
import serviceImg3 from "../images/solman5.jpeg";

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Professional vehicle repair services you can trust. We handle
            accident damage, engine problems, and full body repairs with
            quality workmanship.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text & List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At Solman Panel Beaters and Mechanics, we specialize in repairing
                all types of vehicles. Whether your car has been damaged in an
                accident or is experiencing engine problems, our experienced team
                is ready to help. We focus on delivering reliable, high-quality
                results that get you back on the road safely.
              </p>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We proudly serve customers across North West, Gauteng, and the
                Free State. Our goal is simple — to provide honest service,
                excellent workmanship, and complete customer satisfaction on
                every job.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Our Services Include
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Accident Damage Repairs",
                    "Engine Repairs and Diagnostics",
                    "Panel Beating and Body Work",
                    "Spray Painting and Finishing",
                    "General Vehicle Maintenance",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <span className="text-blue-600 text-lg">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-blue-800">
                  Quality repairs. Reliable service. Trusted results.
                </h3>
              </div>
            </motion.div>

            {/* Right Column - Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6">
                <img
                  src={serviceImg1}
                  alt="Accident repair service"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={serviceImg2}
                    alt="Mechanic repairing engine"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src={serviceImg3}
                    alt="Car body repair and painting"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pb-20">
        <CallToAction />
      </div>
    </div>
  );
};

export default ServicesPage;