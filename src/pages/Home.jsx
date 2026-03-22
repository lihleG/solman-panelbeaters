// src/pages/Home.jsx
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import SkilledServices from "../components/SkilledServices";
import WhyChooseUs from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Affiliations from "../components/Affiliations";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <SkilledServices />
      <WhyChooseUs />
      <CallToAction />
      <Testimonials />
      <Gallery />
      <Contact />
      <Affiliations />
    </>
  );
};

export default Home;