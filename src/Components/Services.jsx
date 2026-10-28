import { FaArrowRight } from "react-icons/fa";
import { servicesData } from "../Data/ServicesData";

export default function Services({ onBookNow }) {
  return (
    <section id="services" className="nb-section nb-section--cream">
      <div className="nb-wrap">
        <div className="nb-head">
          <span className="nb-kicker">My Services</span>

          <h2 className="nb-title nb-title--md">
            Websites I Can <span className="nb-mark">Build</span> For You
          </h2>

          <p className="nb-lede">
            I design and develop fast, modern and responsive websites with
            premium UI, clean code and exceptional user experience.
          </p>
        </div>

        <div className="nb-service-grid">
          {servicesData.map((service, index) => (
            <article className="nb-service" key={service.id}>
              <div className="nb-service__top">
                <span className="nb-service__icon">
                  <service.icon aria-hidden="true" />
                </span>

                <span className="nb-service__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="nb-service__features">
                {service.features.map((feature) => (
                  <div className="nb-service__feature" key={feature}>
                    <span aria-hidden="true">+</span>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onBookNow(service.title)}
                className="nb-btn nb-btn--yellow nb-btn--full"
              >
                Book Now
                <FaArrowRight aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>

        <div className="nb-custom">
          <div>
            <h2>Have a Custom Project?</h2>

            <p>
              Every business has unique requirements. Let&apos;s discuss your
              idea and build a modern, scalable and premium web application
              tailored specifically for your goals.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onBookNow("Custom Website Development")}
            className="nb-btn nb-btn--ink"
          >
            Start Your Project
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
