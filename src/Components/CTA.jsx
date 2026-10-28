import { FaArrowRight, FaBolt, FaHeadset, FaPalette } from "react-icons/fa";

const trustItems = [
  {
    icon: <FaBolt aria-hidden="true" />,
    title: "Fast Delivery",
    description:
      "Quick turnaround with premium quality and attention to detail.",
  },
  {
    icon: <FaPalette aria-hidden="true" />,
    title: "Premium Design",
    description:
      "Beautiful UI with smooth animations and modern user experience.",
  },
  {
    icon: <FaHeadset aria-hidden="true" />,
    title: "Lifetime Support",
    description:
      "Continuous support, guidance and improvements after project delivery.",
  },
];

export default function CTA({ onBookNow }) {
  return (
    <section className="nb-section nb-section--red">
      <div className="nb-wrap">
        <div className="nb-cta-poster">
          <span className="nb-kicker nb-kicker--ink">
            Let&apos;s Work Together
          </span>

          <h2>
            Ready to Build Your{" "}
            <span className="nb-mark nb-mark--signal">Dream Website?</span>
          </h2>

          <p>
            Whether you need a Portfolio, Business Website, Admin Dashboard,
            E-Commerce Store or a Custom Web Application, I&apos;m here to turn
            your ideas into reality with modern design and clean development.
          </p>

          <button
            type="button"
            onClick={() => onBookNow("Custom Website Development")}
            className="nb-btn nb-btn--ink"
          >
            Start Your Project
            <FaArrowRight aria-hidden="true" />
          </button>

          <div className="nb-trust">
            {trustItems.map((item) => (
              <div className="nb-trust__item" key={item.title}>
                <span className="nb-trust__icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
