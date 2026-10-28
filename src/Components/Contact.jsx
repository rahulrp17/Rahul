import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully");

      form.current.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="nb-section nb-section--cream">
      <div className="nb-wrap">
        <div className="nb-head">
          <span className="nb-kicker nb-kicker--signal">Contact Me</span>

          <h2 className="nb-title nb-title--md">Let&apos;s Work Together</h2>

          <p className="nb-lede">
            Have a project in mind? Feel free to reach out.
          </p>
        </div>

        <div className="nb-contact__grid">
          <div className="nb-contact__info">
            <h2>Contact Information</h2>

            <div className="nb-contact__list">
              <div className="nb-contact__row">
                <span className="nb-contact__row-icon">
                  <FaEnvelope aria-hidden="true" />
                </span>
                <a href="mailto:rahulrp4021@gmail.com">rahulrp4021@gmail.com</a>
              </div>

              <div className="nb-contact__row">
                <span className="nb-contact__row-icon">
                  <FaPhone aria-hidden="true" />
                </span>
                <a href="tel:+919342830199">+91 9342830199</a>
              </div>

              <div className="nb-contact__row">
                <span className="nb-contact__row-icon">
                  <FaMapMarkerAlt aria-hidden="true" />
                </span>
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            <div className="nb-contact__socials">
              <a
                href="https://github.com/rahulrp17"
                target="_blank"
                rel="noreferrer"
                className="nb-icon-btn"
                aria-label="GitHub profile"
              >
                <FaGithub aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/rahulrp4021"
                target="_blank"
                rel="noreferrer"
                className="nb-icon-btn"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="nb-contact__form"
            aria-busy={loading}
          >
            <div className="nb-field">
              <label className="nb-label" htmlFor="contact-name">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="from_name"
                placeholder="Your Name"
                autoComplete="name"
                required
                className="nb-input"
              />
            </div>

            <div className="nb-field">
              <label className="nb-label" htmlFor="contact-email">
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="from_email"
                placeholder="Your Email"
                autoComplete="email"
                required
                className="nb-input"
              />
            </div>

            <div className="nb-field">
              <label className="nb-label" htmlFor="contact-subject">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What is this about?"
                autoComplete="off"
                maxLength="120"
                required
                className="nb-input"
              />
            </div>

            <div className="nb-field">
              <label className="nb-label" htmlFor="contact-message">
                Your Message
              </label>
              <textarea
                id="contact-message"
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="nb-input"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="nb-btn nb-btn--yellow"
            >
              <FaPaperPlane aria-hidden="true" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
