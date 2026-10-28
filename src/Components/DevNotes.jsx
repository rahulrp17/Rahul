import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { devNotes } from "../Data/DevNotesData";

export default function DevNotes() {
  return (
    <section
      id="notes"
      className="nb-section nb-section--violet nb-notes"
      aria-labelledby="notes-title"
    >
      <div className="nb-wrap">
        <div className="nb-head nb-head--split nb-notes__head">
          <div className="nb-head__copy">
            <span className="nb-kicker">Dev Notes</span>

            <h2 className="nb-title nb-title--md" id="notes-title">
              Notes From <span className="nb-mark">The Build</span>
            </h2>

            <p className="nb-lede">
              Short, practical observations from building across the stack.
              Less theory, more lessons learned in the browser and the API.
            </p>
          </div>

          <div
            className="nb-notes__count"
            aria-label={`${devNotes.length} field notes`}
          >
            <strong>{String(devNotes.length).padStart(2, "0")}</strong>
            <span>Field notes / practical lessons</span>
          </div>
        </div>

        <div className="nb-notes-grid">
          {devNotes.map((note, index) => (
            <article
              className={[
                "nb-note",
                index === 0 ? "nb-note--featured" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={note.id}
            >
              <div className="nb-note__top">
                <span className="nb-note__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="nb-note__tag">{note.tag}</span>
              </div>

              <h3>{note.title}</h3>

              <p>{note.body}</p>

              <div className="nb-note__bottom">
                <span className="nb-note__read">{note.read}</span>

                <div className="nb-note__tech">
                  {note.tech.map((tech) => (
                    <span className="nb-chip nb-note__chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="nb-notes__cta">
          <div>
            <span className="nb-notes__cta-kicker">
              Want the longer version?
            </span>
            <p>Ask me about any note and I will walk you through the build.</p>
          </div>

          <Link
            to="contact"
            href="#contact"
            smooth={true}
            offset={-100}
            duration={500}
            className="nb-btn nb-btn--ink"
          >
            Start A Conversation
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
