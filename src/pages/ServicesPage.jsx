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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive automotive repair and maintenance services tailored to your needs.
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
                Massa morbi nunc quam viverra letius sagittis. Vel mollis auctor sociosqu vivamus
                duis facilisis. Aliquam finibus torquent at posuere ultricies. Eleifend eu cubilia
                dui dictum ante curae posuere ipsum elementum. Feugiat proin sit finibus dui ac
                nisl. Commodo tellus viverra erat consectetuer faucibus pretium montes elementum
                turpis sociosqu cubilia. Volutpat platea ex urna dapibus dictum ultrices elit justo
                dignissim nunc.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Elementum morbi nullam habitasse facilisis sed ut litora. Pharetra mattis facilisi
                tellus sem potenti metus parturient senectus lacus. Dis dictumst netus nascetur
                tortor ultricies. Volutpat rhoncus lectus eros magnis sit eu torquent malesuada
                quam elementum fringilla.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Preventative Maintenance
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Brake Repair & Services",
                    "Transmission Services",
                    "Engine Services",
                    "Tires & Wheels",
                    "Body Repair & Painting",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <span className="text-blue-600 text-lg">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-blue-800">
                  Give your car a good start
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
                  alt="Car repair service"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={serviceImg2}
                    alt="Mechanic at work"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src={serviceImg3}
                    alt="Car maintenance"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Optional CTA */}
      <div className="pb-20">
        <CallToAction />
      </div>
    </div>
  );
};

export default ServicesPage;