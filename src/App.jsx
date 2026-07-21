import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import WhyChooseMe from "./Components/WhyChooseMe";
import CTA from "./Components/CTA";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import ScrollProgress from "./Components/ScrollProgress";
import SocialSidebar from "./Components/SocialSideBar";
import BackToTop from "./Components/BackToTop";
import Loader from "./Components/Loader";

import BookNowModal from "./Components/BookNowModal";

function App() {
  const [loading, setLoading] = useState(true);

  // Book Modal States
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Open Booking Modal
  const openBooking = (service) => {
    setSelectedService(service);
    setIsBookOpen(true);
  };

  // Close Booking Modal
  const closeBooking = () => {
    setIsBookOpen(false);
    setSelectedService("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Social Sidebar */}
      <SocialSidebar />

      {/* Back To Top */}
      <BackToTop />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Timeline */}
      <Timeline />

      {/* Projects */}
      <Projects />

      {/* Services */}
      <Services onBookNow={openBooking} />

      {/* Why Choose Me */}
      <WhyChooseMe onBookNow={openBooking} />

      {/* CTA */}
      <CTA onBookNow={openBooking} />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookNowModal
        isOpen={isBookOpen}
        onClose={closeBooking}
        selectedService={selectedService}
      />

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  );
}

export default App;