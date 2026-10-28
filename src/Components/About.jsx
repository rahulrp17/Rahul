import AboutArtwork from "./AboutArtwork";

export default function About() {
  const stats = [
    {
      title: "6+",
      subtitle: "Projects",
    },
    {
      title: "MERN Stack",
      subtitle: "Developer",
    },
    {
      title: "100%",
      subtitle: "Responsive",
    },
    {
      title: "UI/UX",
      subtitle: "Focused",
    },
  ];

  return (
    <section id="about" className="nb-section nb-section--cream nb-about">
      <div className="nb-wrap">
        <div className="nb-about__grid">
          <div className="nb-about__photo nb-clip">
            <AboutArtwork />
          </div>

          <div className="nb-about__copy">
            <span className="nb-kicker nb-kicker--signal">About Me</span>

            <h2 className="nb-title nb-title--md">MERN Stack Developer</h2>

            <p className="nb-lede">
              I am a passionate and skilled MERN Stack Developer with a strong
              background in building responsive web applications. I have a deep
              understanding of the MERN stack, including React.js, Node.js,
              Express, and MongoDB. I specialize in creating dynamic and
              interactive user interfaces, optimizing performance, and ensuring
              a seamless user experience.
            </p>

            <div className="nb-facts">
              {stats.map((item) => (
                <div className="nb-fact" key={item.subtitle}>
                  <strong>{item.title}</strong>
                  <span>{item.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
