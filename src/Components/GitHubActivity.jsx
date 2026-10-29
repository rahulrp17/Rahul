import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaCode,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaFolderOpen,
  FaGithub,
  FaStar,
} from "react-icons/fa";

const GITHUB_USER = "rahulrp17";
const PROFILE_URL = `https://github.com/${GITHUB_USER}`;
const FALLBACK_COMMIT_COUNT = 306;

const languageColors = {
  CSS: "#663399",
  HTML: "#e34c26",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
};

const fallbackDescriptions = {
  "Rahul-Portfolio":
    "Animated portfolio built with React, Vite, Tailwind CSS and Framer Motion.",
  GenZRides:
    "Full-stack cab booking platform with authentication, dashboards and live ride tracking.",
  AureliaStay:
    "Hotel booking platform with admin tools, reviews and secure authentication.",
  "Food-Delivery":
    "Responsive food delivery experience with a clean ordering flow and modern UI.",
  CraftAI:
    "AI-assisted marketplace for handmade products with Cloudinary uploads and WhatsApp ordering.",
};

const fallbackRepos = [
  {
    id: "fallback-portfolio",
    name: "Rahul-Portfolio",
    description: fallbackDescriptions["Rahul-Portfolio"],
    language: "JavaScript",
    stargazers_count: 0,
    pushed_at: "2026-10-26T04:34:17Z",
    html_url: `${PROFILE_URL}/Rahul-Portfolio`,
  },
  {
    id: "fallback-genzrides",
    name: "GenZRides",
    description: fallbackDescriptions.GenZRides,
    language: "HTML",
    stargazers_count: 0,
    pushed_at: "2026-10-03T12:03:50Z",
    html_url: `${PROFILE_URL}/GenZRides`,
  },
  {
    id: "fallback-aureliastay",
    name: "AureliaStay",
    description: fallbackDescriptions.AureliaStay,
    language: "JavaScript",
    stargazers_count: 0,
    pushed_at: "2026-08-17T17:23:24Z",
    html_url: `${PROFILE_URL}/AureliaStay`,
  },
  {
    id: "fallback-food-delivery",
    name: "Food-Delivery",
    description: fallbackDescriptions["Food-Delivery"],
    language: "JavaScript",
    stargazers_count: 0,
    pushed_at: "2026-07-13T12:43:37Z",
    html_url: `${PROFILE_URL}/Food-Delivery`,
  },
];

const fallbackProfile = {
  public_repos: 11,
  created_at: "2025-06-24T13:12:58Z",
};

function formatDate(value) {
  if (!value) {
    return "Recently";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Recently";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatCount(value) {
  return String(value).padStart(2, "0");
}

export default function GitHubActivity() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [repos, setRepos] = useState(fallbackRepos);
  const [languageCount, setLanguageCount] = useState(3);
  const [commitCount, setCommitCount] = useState(FALLBACK_COMMIT_COUNT);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHub() {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`, {
            signal: controller.signal,
          }),
          fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
            { signal: controller.signal }
          ),
        ]);

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error("GitHub request failed");
        }

        const [profileData, reposData] = await Promise.all([
          profileResponse.json(),
          reposResponse.json(),
        ]);

        if (controller.signal.aborted) {
          return;
        }

        const commitsResponse = await fetch(
          `https://api.github.com/search/commits?q=${encodeURIComponent(
            `author:${GITHUB_USER}`
          )}&per_page=1`,
          {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }
        ).catch(() => null);

        if (controller.signal.aborted) {
          return;
        }

        const commitsData =
          commitsResponse?.ok
            ? await commitsResponse.json().catch(() => null)
            : null;

        const publicRepos = reposData.filter(
          (repo) =>
            !repo.fork && repo.name.toLowerCase() !== GITHUB_USER
        );

        const languages = new Set(
          publicRepos.map((repo) => repo.language).filter(Boolean)
        );

        setProfile(profileData);
        setRepos(
          publicRepos.length ? publicRepos.slice(0, 4) : fallbackRepos
        );
        setLanguageCount(languages.size || 1);

        if (typeof commitsData?.total_count === "number") {
          setCommitCount(commitsData.total_count);
        }

        setStatus("ready");
      } catch {
        if (!controller.signal.aborted) {
          setStatus("error");
        }
      }
    }

    loadGitHub();

    return () => controller.abort();
  }, []);

  const latestPush = repos.find((repo) => repo.pushed_at)?.pushed_at;
  const statusTone = status === "ready" ? "live" : status;
  const statusCopy =
    status === "ready"
      ? "Live from GitHub"
      : status === "error"
        ? "Profile snapshot"
        : "Syncing GitHub";

  const stats = [
    {
      key: "repos",
      icon: FaFolderOpen,
      value: formatCount(profile.public_repos),
      label: "Public repositories",
    },
    {
      key: "commits",
      icon: FaCodeBranch,
      value: formatCount(commitCount),
      label: "Total commits",
    },
    {
      key: "languages",
      icon: FaCode,
      value: formatCount(languageCount),
      label: "Primary languages",
    },
    {
      key: "since",
      icon: FaCalendarAlt,
      value: new Date(profile.created_at).getFullYear(),
      label: "On GitHub since",
    },
  ];

  return (
    <section
      id="github"
      className="nb-section nb-github"
      aria-labelledby="github-title"
    >
      <div className="nb-wrap">
        <div className="nb-head nb-head--split nb-github__head">
          <div className="nb-head__copy">
            <span className="nb-kicker bg-orange-600!">Open Source</span>

            <h2 className="nb-title nb-title--md" id="github-title">
              Building In <span className="nb-mark bg-yellow-300! text-black border-b-5  border-r-5 pr-4! border-orange-600!">Public</span>
            </h2>

            <p className="nb-lede">
              A live look at the repositories behind the work. I use GitHub to
              ship projects, document decisions and keep improving the details.
            </p>
          </div>

          <div className="nb-github__side">
            <span
              className="nb-github__status"
              aria-live="polite"
            >
              <span
                className={`nb-github__dot nb-github__dot--${statusTone}`}
                aria-hidden="true"
              />
              {statusCopy}
            </span>

            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="nb-btn nb-btn--yellow nb-github__cta"
            >
              <FaGithub aria-hidden="true" />
              @{GITHUB_USER}
            </a>

            <span className="nb-github__latest">
              Latest push / {formatDate(latestPush)}
            </span>
          </div>
        </div>

        <div className="nb-github__stats">
          {stats.map((stat) => (
            <article className="nb-github-stat" key={stat.key}>
              <span className="nb-github-stat__icon" aria-hidden="true">
                <stat.icon />
              </span>

              <strong>{stat.value}</strong>

              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="nb-github__repos">
          <div className="nb-github__repos-head">
            <h3>Recent Repositories</h3>
            <span>
              {String(repos.length).padStart(2, "0")} / selected work
            </span>
          </div>

          <div className="nb-github__repo-grid">
            {repos.map((repo) => (
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="nb-github-repo"
                key={repo.id ?? repo.name}
              >
                <div className="nb-github-repo__top">
                  <span className="nb-github-repo__name">{repo.name}</span>
                  <FaExternalLinkAlt
                    className="nb-github-repo__arrow"
                    aria-hidden="true"
                  />
                </div>

                <p>
                  {repo.description ||
                    fallbackDescriptions[repo.name] ||
                    "A public repository from my GitHub profile."}
                </p>

                <div className="nb-github-repo__meta">
                  <span className="nb-github-repo__lang">
                    <span
                      className="nb-github-repo__dot"
                      style={{
                        backgroundColor:
                          languageColors[repo.language] ||
                          "var(--dp-color-field)",
                      }}
                      aria-hidden="true"
                    />
                    {repo.language || "Code"}
                  </span>

                  <span>
                    {repo.stargazers_count > 0 ? (
                      <>
                        <FaStar aria-hidden="true" /> {repo.stargazers_count}
                      </>
                    ) : (
                      <>Updated {formatDate(repo.pushed_at)}</>
                    )}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
