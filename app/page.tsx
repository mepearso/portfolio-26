"use client";

import DogHover from "./components/DogHover";

// --- Content ---
// Add new writing entries here. Year groups automatically.
const writings = [
  {
    title: "A New Chapter",
    href: "/writing/a-new-chapter",
    date: "17 May",
    year: "2026",
  },
  // { title: "AI in the Field", href: "/writing/ai-in-the-field", date: "—", year: "2026" },
  // { title: "Dignified Robotics", href: "/writing/dignified-robotics", date: "—", year: "2026" },
];

// Add or remove connect links here.
const links = [
  { label: "Send me an email", href: "mailto:megan.e.pearson@gmail.com" },
  {
    label: "Find my CV on LinkedIn",
    href: "https://www.linkedin.com/in/meganepearson/",
  },
];
// --- End Content ---

const divider =
  "0.5px solid color-mix(in srgb, var(--foreground) 15%, transparent)";

export default function Home() {
  return (
    <div className="w-[500]">
      <div className="bold-text mb-6 md:mb-12">Hi, I'm Megan Pearson</div>

      <div className="mb-16">
        <p>
          I've been building software for more than a decade. For the last
          several years, I've been leading teams to do so.
        </p>
        <p>
          From agencies to startups, I've focused on building solutions aimed at
          solving real world problems. Technology is accelerating and I'm
          interested in how we use it to make our lives, and the world around us
          better.
        </p>
        <p>
          As of 2026 I'm working for Sunrise Robotics, leading Cell Experience —
          the layer where human meets machine.
        </p>
        <p>
          When not working, I'm often running: a 2
          <span className="text-xs align-middle ps-[2px]">×</span> marathoner, I
          ran marathons in Amsterdam (2024) and Berlin (2025).
        </p>
        <p>
          I also have a very good dog, <DogHover />.
        </p>
      </div>

      <div className="mb-16">
        <div
          className="mb-3"
          style={{ color: "var(--foreground)", opacity: 0.5 }}
        >
          Writing
        </div>
        <div>
          {writings.map((item, i) => {
            const showYear = i === 0 || writings[i - 1].year !== item.year;
            return (
              <a
                key={item.href}
                href={item.href}
                style={{
                  borderBottom: divider,
                  textDecoration: "none",
                  color: "var(--foreground)",
                }}
                className="flex items-baseline gap-4 py-2 group"
              >
                <span
                  className="w-12 shrink-0"
                  style={{ opacity: showYear ? 1 : 0 }}
                >
                  {item.year}
                </span>
                <span className="flex-1 group-hover:opacity-70 transition-opacity">
                  {item.title}
                </span>
                <span className="shrink-0">{item.date}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div>
        <div
          className="mb-3"
          style={{ color: "var(--foreground)", opacity: 0.5 }}
        >
          Connect
        </div>
        {links.map((link) => (
          <a
            key={link.href}
            className="block hover-arrow"
            href={link.href}
            target="_blank"
            rel="external"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
