// src/components/Contact.jsx
import { motion } from "framer-motion";

const Contact = () => {
  const openCalendly = () => {
    const calendlyUrl = 'https://calendly.com/solmanpanel/30min';
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      window.open(calendlyUrl, '_blank');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Get in touch with Solman Panel Beaters and Mechanics for reliable
            vehicle repairs and quality service.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column – Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Phone Number
                  </h3>
                  <p className="text-gray-600">📞 084 429 8065</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Workshop Location
                  </h3>
                  <p className="text-gray-600">
                    12414 Mogolodi Street, Ikageng,<br />
                    Potchefstroom, North West, South Africa
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Service Areas
                  </h3>
                  <p className="text-gray-600">
                    We serve North West, Gauteng and Free State, including
                    Klerksdorp, Ventersdorp, Carletonville and Parys.
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                    GET IN TOUCH
                  </h3>
                  <p className="text-gray-600 italic">
                    Quality repairs you can trust.
                  </p>
                </div>

                {/* Calendly Button */}
                <div className="pt-2">
                  <motion.button
                    onClick={openCalendly}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition w-full md:w-auto"
                  >
                    📅 Book a Free Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Column – Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
                  Send Us a Message
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition"
                  />
                  <textarea
                    placeholder="How can we help you?"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-blue-800 transition"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
              Find Us Here
            </h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Solman Panel Beaters Location"
                src="https://www.google.com/maps?q=12414+Mogolodi+Street+Ikageng+Potchefstroom&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;