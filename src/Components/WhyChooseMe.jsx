import {
  FaRocket,
  FaLaptopCode,
  FaMobileAlt,
  FaBolt,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaRocket aria-hidden="true" />,
    title: "Fast Delivery",
    description:
      "Projects are delivered on time without compromising quality or performance.",
  },
  {
    icon: <FaLaptopCode aria-hidden="true" />,
    title: "Modern Development",
    description:
      "Built using React, JavaScript, Tailwind CSS and the latest frontend technologies.",
  },
  {
    icon: <FaMobileAlt aria-hidden="true" />,
    title: "100% Responsive",
    description:
      "Your website will look perfect on desktop, tablet and every mobile device.",
  },
  {
    icon: <FaBolt aria-hidden="true" />,
    title: "High Performance",
    description:
      "Optimized loading speed, smooth animations and SEO-friendly structure.",
  },
  {
    icon: <FaShieldAlt aria-hidden="true" />,
    title: "Clean Code",
    description:
      "Scalable, reusable and maintainable code following industry best practices.",
  },
  {
    icon: <FaHeadset aria-hidden="true" />,
    title: "Dedicated Support",
    description:
      "Quick communication, project updates and support even after delivery.",
  },
];

const stats = [
  ["15+", "Projects Completed"],
  ["100%", "Responsive Design"],
  ["24 Hrs", "Quick Response"],
  ["Modern", "Latest Technologies"],
];

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="nb-section nb-section--white">
      <div className="nb-wrap">
        <div className="nb-head nb-head--center">
          <span className="nb-kicker nb-kicker--violet">Why Choose Me</span>

          <h2 className="nb-title nb-title--md">
            Building Websites That{" "}
            <span className="nb-mark nb-mark--signal">Drive Results</span>
          </h2>

          <p className="nb-lede">
            I combine modern design, clean code, responsive layouts and
            performance optimization to build websites that help businesses grow
            online with a premium user experience.
          </p>
        </div>

        <div className="nb-reason-grid">
          {reasons.map((item, index) => (
            <article className="nb-reason" key={item.title}>
              <div className="nb-reason__top">
                <span className="nb-reason__icon">{item.icon}</span>

                <h3>{item.title}</h3>

                <span className="nb-reason__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="nb-benefit-field" aria-label="Delivery facts">
          {stats.map(([number, label]) => (
            <div className="nb-benefit" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
