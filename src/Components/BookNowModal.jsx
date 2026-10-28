import { useEffect, useRef, useState } from "react";
import {
  FaWhatsapp,
  FaBolt,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

const emptyForm = {
  service: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  timeline: "",
  details: "",
};

export default function BookNowModal({ isOpen, onClose, selectedService }) {
  const closeRef = useRef(null);
  const modalRef = useRef(null);
  const [form, setForm] = useState(() => ({
    ...emptyForm,
    service: selectedService || "",
  }));

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = "";

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = () => {
    if (!form.name || !form.email || !form.phone || !form.details) {
      alert("Please fill all required fields");
      return;
    }

    const phoneNumber = "919342830199";

    const message = `*New Website Inquiry*
-------------------------
Service: ${form.service}

Name: ${form.name}

Email: ${form.email}

Phone: ${form.phone}

Company: ${form.company || "N/A"}

Budget: ${form.budget || "Not Specified"}

Timeline: ${form.timeline || "Not Specified"}

Project Details:
${form.details}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    onClose();

    setForm({
      ...emptyForm,
      service: selectedService || "",
    });

    setTimeout(() => {
      const section = document.getElementById("services");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="nb-modal-backdrop" onClick={onClose}>
      <div
        ref={modalRef}
        className="nb-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nb-modal__head">
          <div>
            <h2 id="booking-modal-title">Book Your Project</h2>
            <p>Let&apos;s discuss your project requirements</p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="nb-modal__close"
            aria-label="Close booking form"
          >
            &times;
          </button>
        </div>

        <div className="nb-modal__body">
          <div className="nb-modal__form">
            <div className="nb-field nb-field--full">
              <label className="nb-label" htmlFor="booking-service">
                Selected Service
              </label>

              <input
                id="booking-service"
                type="text"
                name="service"
                value={form.service}
                readOnly
                className="nb-input"
              />
            </div>

            <div className="nb-field">
              <label className="nb-label" htmlFor="booking-name">
                Full Name *
              </label>

              <input
                id="booking-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="nb-input"
              />
            </div>

            <div className="nb-field">
              <label className="nb-label" htmlFor="booking-email">
                Email Address *
              </label>

              <input
                id="booking-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="nb-input"
              />
            </div>

            <div className="nb-field">
              <label className="nb-label" htmlFor="booking-phone">
                Phone Number *
              </label>

              <input
                id="booking-phone"
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
                className="nb-input"
              />
            </div>

            <div className="nb-field">
              <label className="nb-label" htmlFor="booking-company">
                Company / Brand
              </label>

              <input
                id="booking-company"
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                autoComplete="organization"
                className="nb-input"
              />
            </div>

            <div className="nb-field">
              <label className="nb-label" htmlFor="booking-budget">
                Budget
              </label>

              <select
                id="booking-budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="nb-input"
              >
                <option value="">Select Budget</option>
                <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                <option value="₹20,000 - ₹40,000">₹20,000 - ₹40,000</option>
                <option value="₹40,000+">₹40,000+</option>
              </select>
            </div>

            <div className="nb-field">
              <label className="nb-label" htmlFor="booking-timeline">
                Timeline
              </label>

              <select
                id="booking-timeline"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="nb-input"
              >
                <option value="">Select Timeline</option>
                <option value="Within 1 Week">Within 1 Week</option>
                <option value="2-3 Weeks">2-3 Weeks</option>
                <option value="1 Month">1 Month</option>
                <option value="1-2 Months">1-2 Months</option>
                <option value="More than 2 Months">More than 2 Months</option>
                <option value="Flexible">I&apos;m Flexible</option>
              </select>
            </div>

            <div className="nb-field nb-field--full">
              <label className="nb-label" htmlFor="booking-details">
                Project Details *
              </label>

              <textarea
                id="booking-details"
                rows={6}
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="nb-input"
              />
            </div>
          </div>

          <div className="nb-modal__confirm">
            <div>
              <h3>Ready to build your project?</h3>
              <p>I&apos;ll review your requirements and reply within 24 hours.</p>
            </div>

            <button
              type="button"
              onClick={sendToWhatsApp}
              className="nb-btn nb-btn--signal"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>Book Now via WhatsApp</span>
            </button>
          </div>

          <div className="nb-modal__trust">
            <div className="nb-modal__trust-item">
              <FaBolt aria-hidden="true" />
              <strong>Fast Response</strong>
              <span>Within 24 Hours</span>
            </div>

            <div className="nb-modal__trust-item">
              <FaShieldAlt aria-hidden="true" />
              <strong>Secure Discussion</strong>
              <span>Your information is safe</span>
            </div>

            <div className="nb-modal__trust-item">
              <FaStar aria-hidden="true" />
              <strong>Premium Quality</strong>
              <span>Modern &amp; Responsive Website</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
