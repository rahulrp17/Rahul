import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Projects from "./Components/Projects";
import GitHubActivity from "./Components/GitHubActivity";
import Services from "./Components/Services";
import WhyChooseMe from "./Components/WhyChooseMe";
import DevNotes from "./Components/DevNotes";
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
  const [introComplete, setIntroComplete] = useState(false);

  const [isBookOpen, setIsBookOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = introComplete ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [introComplete]);

  const openBooking = (service) => {
    setSelectedService(service);
    setIsBookOpen(true);
  };

  const closeBooking = () => {
    setIsBookOpen(false);
    setSelectedService("");
  };

  return (
    <>
      <div
        className="app-shell"
        inert={!introComplete}
        aria-hidden={!introComplete ? "true" : undefined}
      >
        <ScrollProgress />

        <Navbar />

        <SocialSidebar />

        <BackToTop />

        <main>
          <Hero />

          <About />

          <Skills />

          <Timeline />

          <Projects />

          <GitHubActivity />

          <Services onBookNow={openBooking} />

          <WhyChooseMe />

          <DevNotes />

          <Contact />

          <CTA onBookNow={openBooking} />
        </main>

        <Footer />

        <BookNowModal
          key={isBookOpen ? `booking-${selectedService}` : "booking-closed"}
          isOpen={isBookOpen}
          onClose={closeBooking}
          selectedService={selectedService}
        />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="light"
        />
      </div>

      <AnimatePresence onExitComplete={() => setIntroComplete(true)}>
        {loading && <Loader key="intro-loader" />}
      </AnimatePresence>
    </>
  );
}

export default App;
