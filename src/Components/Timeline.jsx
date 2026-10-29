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

const timelineGroups = timelineData.reduce((groups, item, index) => {
  const existingGroup = groups.find((group) => group.year === item.year);
  const entry = { ...item, index: index + 1 };

  if (existingGroup) {
    existingGroup.items.push(entry);
  } else {
    groups.push({ year: item.year, items: [entry] });
  }

  return groups;
}, []);

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="nb-section nb-section--cream nb-timeline-section"
    >
      <div className="nb-wrap">
        <div className="nb-head nb-head--split nb-timeline-head">
          <div className="nb-head__copy">
            <span className="nb-kicker nb-kicker--violet">Journey</span>

            <h2 className="nb-title nb-title--md">Development Timeline</h2>

            <p className="nb-lede">
              A record of the projects and milestones that shaped my approach
              to building software.
            </p>
          </div>

          <div className="nb-timeline__summary" aria-label="Timeline summary">
            <div>
              <strong>{String(timelineData.length).padStart(2, "0")}</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>{String(timelineGroups.length).padStart(2, "0")}</strong>
              <span>Years</span>
            </div>
          </div>
        </div>

        <ol className="nb-timeline">
          {timelineGroups.map((group) => (
            <li className="nb-timeline__group" key={group.year}>
              <div className="nb-timeline__year">
                <span className="nb-timeline__dot" aria-hidden="true" />

                <time dateTime={group.year}>{group.year}</time>

                <span>
                  {String(group.items.length).padStart(2, "0")} projects
                </span>
              </div>

              <div className="nb-timeline__entries">
                {group.items.map((item) => (
                  <article
                    className="nb-timeline__card"
                    key={`${item.year}-${item.title}`}
                  >
                    <div
                      className="nb-timeline__index"
                      aria-hidden="true"
                    >
                      <span>Project</span>
                      <strong>{String(item.index).padStart(2, "0")}</strong>
                    </div>

                    <div className="nb-timeline__content">
                      <h3>{item.title}</h3>

                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
