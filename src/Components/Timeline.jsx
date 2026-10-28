const timelineData = [
  {
    year: "2025",
    title: "Weather App",
    description:
      "Built a real-time weather application using React and OpenWeather API.",
  },
  {
    year: "2025",
    title: "Food Delivery App",
    description:
      "Developed a responsive food ordering platform with cart functionality.",
  },
  {
    year: "2025",
    title: "Three.js Portfolio Website",
    description:
      "Created a modern animated portfolio using React and Framer Motion.",
  },
  {
    year: "2026",
    title: "Authify",
    description:
      "Built a JWT authentication system with secure login and registration.",
  },
  {
    year: "2026",
    title: "CraftAI Handmade Marketplace",
    description:
      "Developed a marketplace for handmade products using React and express.js with JWT authentication, Cloudinary uploads, WhatsApp ordering, and AI chatbot assistant.",
  },
  {
    year: "2026",
    title: "AureliaStay",
    description:
      "Developed a secure and user-friendly hotel booking website with authentication and admin dashboard.",
  },
  {
    year: "2026",
    title: "Cab Booking App",
    description:
      "Developed a complete cab booking platform with responsive UI, live tracking, and admin dashboard, Driver Dashboard, Customer Dashboard.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="nb-section nb-section--cream">
      <div className="nb-wrap">
        <div className="nb-head">
          <span className="nb-kicker nb-kicker--violet">Journey</span>

          <h2 className="nb-title nb-title--md">My Development Timeline</h2>

          <p className="nb-lede">
            Projects and milestones throughout my learning journey.
          </p>
        </div>

        <ol className="nb-ledger">
          {timelineData.map((item, index) => (
            <li className="nb-step" key={`${item.year}-${item.title}`}>
              <div className="nb-step__year">
                <span className="nb-step__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{item.year}</strong>
              </div>

              <div className="nb-step__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
