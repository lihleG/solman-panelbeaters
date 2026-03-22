// src/pages/ContactPage.jsx
import Contact from "../components/Contact";
import Affiliations from "../components/Affiliations";

const ContactPage = () => {
  return (
    <>
      <section className="bg-gray-50 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for a free quote or to schedule a repair.
        </p>
      </section>
      <Contact />
      <Affiliations />
    </>
  );
};

export default ContactPage;