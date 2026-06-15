import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import ScrollProgress from "./Components/ScrollProgress";
// import Stats from "./Components/Stats";
import Timeline from "./Components/Timeline";
// import Cursor from "./Components/Cursor";
import CTA from "./Components/CTA";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import SocialSidebar from "./Components/SocialSideBar";
import BackToTop from "./Components/BackToTop";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-[#0a0a0a] text-white">
       <ScrollProgress />
      {/* <Cursor /> */}
      <Navbar />
      <SocialSidebar /> 
      <Hero /> 
      <BackToTop /> 
      {/* <Stats /> */}
      <About /> 
      <Skills />
      <Timeline /> 
      <Projects />
      <CTA /> 
      <Contact />
      <ToastContainer position="top-right" autoClose={3000} /> 
      <Footer />
    </div>
  );
}

export default App;
