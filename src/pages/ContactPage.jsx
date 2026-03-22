// src/pages/ContactPage.jsx
import Contact from "../components/Contact";
import Affiliations from "../components/Affiliations";

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Solman Panel Beaters and Mechanics
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Need your car repaired? Get in touch with us today for reliable,
          high-quality service. We handle accident-damaged and engine-damaged
          vehicles with customer satisfaction as our top priority.
        </p>
      </section>

      {/* Contact Component */}
      <Contact />

      {/* Affiliations / Optional Section */}
      <Affiliations />
    </>
  );
};

export default ContactPage;