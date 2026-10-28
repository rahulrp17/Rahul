import portrait from "../assets/h.png";

export default function HeroPortrait() {
  return (
    <svg
      className="nb-hero__portrait"
      viewBox="0 0 1054 1536"
      role="img"
      aria-labelledby="hero-portrait-title"
      preserveAspectRatio="xMidYMid meet"
    >
      <title id="hero-portrait-title">Rahul, MERN stack developer</title>
      <rect width="1024" height="1536" fill="#ffffff" />
      <image
        href={portrait}
        width="1054"
        height="1536"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}
