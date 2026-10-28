import avatar from "../assets/avatar3.webp";

export default function AboutArtwork() {
  return (
    <svg
      className="nb-about-art"
      viewBox="0 0 640 800"
      role="img"
      aria-labelledby="about-art-title about-art-desc"
    >
      <title id="about-art-title">Animated portrait of Rahul</title>
      <desc id="about-art-desc">
        A framed portrait with floating geometric accents and an availability
        badge.
      </desc>

      <defs>
        <pattern
          id="about-art-dots"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="1.5" fill="#000000" opacity="0.14" />
        </pattern>

        <clipPath id="about-art-portrait-clip">
          <rect x="42" y="40" width="556" height="668" />
        </clipPath>

        <linearGradient id="about-art-shine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="640" height="800" fill="#fff5d6" />
      <rect width="640" height="800" fill="url(#about-art-dots)" />

      <rect x="42" y="40" width="588" height="700" fill="#000000" />
      <rect
        x="26"
        y="24"
        width="588"
        height="700"
        fill="#ffffff"
        stroke="#000000"
        strokeWidth="6"
      />

      <g clipPath="url(#about-art-portrait-clip)">
        <g className="about-art__portrait">
          <image
            href={avatar}
            x="42"
            y="40"
            width="556"
            height="668"
            preserveAspectRatio="xMidYMin slice"
          />
        </g>

        <g transform="rotate(18 320 374)">
          <rect
            className="about-art__shine"
            x="-240"
            y="-100"
            width="130"
            height="960"
            fill="url(#about-art-shine)"
          />
        </g>
      </g>

      <rect
        x="42"
        y="40"
        width="556"
        height="668"
        fill="none"
        stroke="#000000"
        strokeWidth="4"
      />

      <path
        d="M26 98V24H100"
        fill="none"
        stroke="#000000"
        strokeWidth="8"
      />
      <path
        d="M540 724H614V650"
        fill="none"
        stroke="#000000"
        strokeWidth="8"
      />

      <g className="about-art__orbit">
        <circle
          cx="62"
          cy="76"
          r="54"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeDasharray="7 10"
          opacity="0.55"
        />
      </g>

      <g className="about-art__float about-art__float--red">
        <circle
          cx="62"
          cy="76"
          r="42"
          fill="#ff4332"
          stroke="#000000"
          strokeWidth="5"
        />
        <path
          d="M62 50L69 68L88 76L69 84L62 102L55 84L36 76L55 68Z"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="2"
        />
      </g>

      <g className="about-art__float about-art__float--violet">
        <rect
          x="548"
          y="640"
          width="66"
          height="66"
          fill="#d4bdff"
          stroke="#000000"
          strokeWidth="5"
          transform="rotate(12 581 673)"
        />
      </g>

      <g className="about-art__spark">
        <path
          d="M596 58L603 78L623 85L603 92L596 112L589 92L569 85L589 78Z"
          fill="#ffed00"
          stroke="#000000"
          strokeWidth="3"
        />
      </g>

      <circle
        cx="590"
        cy="442"
        r="9"
        fill="#ffed00"
        stroke="#000000"
        strokeWidth="3"
      />

      <g>
        <rect x="136" y="702" width="384" height="58" fill="#000000" />
        <rect
          x="126"
          y="692"
          width="384"
          height="58"
          fill="#ffed00"
          stroke="#000000"
          strokeWidth="5"
        />

        <circle
          className="about-art__status"
          cx="154"
          cy="721"
          r="7"
          fill="#22c55e"
          stroke="#000000"
          strokeWidth="2"
        />

        <text
          x="318"
          y="727"
          textAnchor="middle"
          fontFamily="NeoBrutalismHost, Arial Black, sans-serif"
          fontSize="15"
          fontWeight="800"
          fill="#000000"
        >
          OPEN TO WORK
        </text>
      </g>
    </svg>
  );
}
