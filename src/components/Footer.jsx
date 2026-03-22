// src/components/Footer.jsx
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Solman Panel Beaters</h3>
            <p className="text-blue-200 mb-4">
              Quality repairs for accident-damaged and engine-damaged vehicles.
              Customer satisfaction comes first.
            </p>
            <p className="text-blue-200">
              <span className="font-semibold">Need Help? We are Here to Help You!</span>
            </p>
          </div>

          {/* Column 2 - Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition">Panel Beating & Chassis Straightening</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Spray Painting</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Mechanical Repairs</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Auto Electrical</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Engine Diagnostics</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Towing Services</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition">How to get started?</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Frequently Asked</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Customer Testimonials</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Get a Free Quote</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Help & Support Center</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition">Our Blog & Article</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-blue-200">
              <li>📍 286 Main Reef Road, Denver, Johannesburg</li>
              <li>📧 info@solmanpanelbeaters.co.za</li>
              <li>📞 084 429 8065</li>
            </ul>
            <h4 className="text-lg font-semibold mt-6 mb-4">Opening Hours</h4>
            <ul className="space-y-1 text-blue-200">
              <li>Mon–Fri: 08:00 AM – 05:00 PM</li>
              <li>Saturday: 09:00 AM – 02:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} Solman Panel Beaters & Mechanics. All rights reserved.</p>
          <p className="mt-2">Website by YourCompany</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;