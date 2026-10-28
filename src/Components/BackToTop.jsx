import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector(".nb-footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: "0px 0px 12% 0px" }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  if (!show || nearFooter) return null;

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        })
      }
      className="nb-to-top"
      aria-label="Back to top"
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
}
