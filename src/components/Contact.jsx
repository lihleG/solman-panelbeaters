// src/components/Contact.jsx
import { motion } from "framer-motion";

const Contact = () => {
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
            Reach out to us with any questions or concerns you may have, and we'll be happy to help.
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
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Phone Number</h3>
                  <p className="text-gray-600">Phone 1: 084 429 8065</p>
                  <p className="text-gray-600">Phone 2: +27 60 426 3056</p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Workshop Location</h3>
                  <p className="text-gray-600">
                    286 Main Reef Road, Denver,<br />
                    Johannesburg, 2094, South Africa
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">Email Address</h3>
                  <p className="text-gray-600">info@solmanpanelbeaters.co.za</p>
                  <p className="text-gray-600">support@solmanpanelbeaters.co.za</p>
                </div>

                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">GET IN TOUCH</h3>
                  <p className="text-gray-600 italic">Quick mechanic for quick help,</p>
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
                <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Send Us a Message</h3>
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
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Find Us Here</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Google Maps Embed (replace with actual coordinates) */}
              <iframe
                title="Solman Panel Beaters Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.680236093138!2d28.0865154!3d-26.1475794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1b6e3e8f9b%3A0x7c0b1b6e8f9b5c4d!2s286%20Main%20Reef%20Rd%2C%20Denver%2C%20Johannesburg%2C%202094!5e0!3m2!1sen!2sza!4v1711123456789!5m2!1sen!2sza"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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