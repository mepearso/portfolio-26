import LinkPreview from "../../components/LinkPreview";
import { writings } from "../../data/writings";

const currentHref = "/writing/a-new-chapter";

export default function ANewChapter() {
  return (
    <>
      {/* Fixed sidebar — removed from flex flow so content centres like the homepage */}
      <nav
        className="fixed w-36 flex flex-col"
        style={{ top: "2rem", right: "calc(50% + 304px)" }}
      >
        <a
          href="/"
          title="Back to home"
          className="hover-arrow-left leading-none mb-6 md:mb-12 block hover:opacity-70 transition-opacity"
          style={{ color: "var(--foreground)", textDecoration: "none" }}
        >
          Back
        </a>
        <div className="flex flex-col gap-1" style={{ paddingTop: "2px" }}>
          {writings.map((w) =>
            w.published ? (
              <a
                key={w.href}
                href={w.href}
                title={w.title}
                style={{ color: "var(--foreground)", textDecoration: "none" }}
                className="hover:opacity-70 transition-opacity"
              >
                {w.title}
              </a>
            ) : (
              <span
                key={w.href}
                style={{ color: "var(--foreground)", opacity: 0.35 }}
              >
                {w.title}
              </span>
            ),
          )}
        </div>
      </nav>

      {/* Main content — centred by layout's justify-center */}
      <div className="w-[560px]">
        <div className="bold-text mb-6 md:mb-12" style={{ lineHeight: 1 }}>
          A New Chapter
        </div>
        <div className="mb-6 md:mb-12">
          <p className="lede" style={{ marginBottom: "2rem" }}>
            This week I started a new chapter—one that feels like stepping into
            the future, while at the same time, very much like coming home.
          </p>
          <p>
            When I was 14, I started flying airplanes. By 21 I was a flight
            instructor, and working as an industrial engineer at UPS. I traveled
            around the US to various hubs in Denver, Chicago, and Seattle to
            work directly with aircraft mechanics. The engineering work I was
            doing there focused on improving their daily work. I observed their
            workflows to understand their constraints and figured out how I
            could make their jobs easier.
          </p>
          <p>
            I was building things that changed how people operate, and I valued
            it deeply. I've been drawn to that kind of work ever since.
          </p>
          <p>
            I carried that instinct forward when I worked at{" "}
            <LinkPreview
              href="https://bakkenbaeck.com/"
              target="_blank"
            >
              Bakken & Bæck
            </LinkPreview>
            . The things I worked on there – a startup delivering household
            goods in reusable packaging, an app that ties your home's blinds to
            the weather, a platform to give you more control over selling your
            house—weren't world-changing, but they removed real friction, for
            real people.
          </p>
          <p>
            At{" "}
            <LinkPreview href="https://pitch.com/" target="_blank">
              Pitch
            </LinkPreview>{" "}
            I built presentation software. At{" "}
            <LinkPreview href="https://www.raycast.com/" target="_blank">
              Raycast
            </LinkPreview>{" "}
            I optimized developer workflows and measured muscle memory gains. I realized I
            was building tools for people building tools, at a time when the
            wider industry had become more interested in fitting AI into
            everything than in solving real problems. I was leaving real
            problems to sit unsolved, and I missed working on something
            tangible.
          </p>
          <p>
            Last week I started a new chapter at{" "}
            <a
              href="https://sunriserobotics.co/"
              title="Sunrise Robotics"
              target="_blank"
              rel="external noopener noreferrer"
            >
              Sunrise Robotics
            </a>
            , a European robotics company, and it feels like I'm returning to
            what resonated with me way back at UPS, when I was travelling from
            Denver to Seattle to Chicago, meeting aircraft mechanics in the
            field.
          </p>
          <p>
            Sunrise is solving a very concrete problem: Europe's ageing
            workforce. In fifteen years, a third of the current manufacturing
            workforce will reach retirement age¹, leaving a gap that will impact
            Europe's ability to sustain its industries.
          </p>
          <p>
            At a time when the demand for European manufacturing is growing,
            Sunrise is building flexible and intelligent automation to
            augment—not replace—workers in manufacturing. We're reimagining what
            that automation looks like, and figuring out how to unlock a
            technology that's historically only been affordable or capable when
            applied at scale.
          </p>
          <p>
            My job is to lead the <em>Cell Experience</em>, which is where the
            robotic cell intersects with a factory operator. My aim is to make
            it easier, safer, and as humane as possible to work alongside this
            new technology. To make their day-to-day easier and more enjoyable,
            so that fifteen years from now the factory floor is a place young
            people are excited to walk onto.
          </p>
          <p>
            I spent my first week onboarding at our headquarters in Ljubljana,
            in-between robots built by people who hold PhDs in robotics. It felt
            exhilarating, like stepping into the future, while at the same time,
            very much like coming home.
          </p>
        </div>
      </div>
    </>
  );
}
