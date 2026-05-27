"use client";

import LinkPreview from "./components/LinkPreview";
import { writings } from "./data/writings";

// --- Content ---
// Add new writing entries here in app/data/writings.ts. Year groups automatically.

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
    <div className="w-[560px]">
      <div className="bold-text mb-6 md:mb-12">Hi, I'm Megan Pearson.</div>

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
          As of 2026 I'm working for{" "}
          <LinkPreview href="https://sunriserobotics.co/" target="_blank">
            Sunrise Robotics
          </LinkPreview>
          , leading <em>Cell Experience</em>—the layer where human meets
          machine.
        </p>
        <p>
          When not working, I'm often running: a 2
          <span className="text-xs align-middle ps-[2px]">×</span> marathoner, I
          ran marathons in Amsterdam (2024) and Berlin (2025).
        </p>
        <p>
          I also have a very good dog,{" "}
          <LinkPreview previewKey="oscar">Oscar</LinkPreview>.
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
            const rowStyle = {
              borderBottom: divider,
              textDecoration: "none",
              color: "var(--foreground)",
            };
            const inner = (
              <>
                <span
                  className="w-12 shrink-0"
                  style={{ opacity: showYear ? 1 : 0 }}
                >
                  {item.year}
                </span>
                <span
                  className={`flex-1 transition-opacity ${item.published ? "group-hover:opacity-70" : "opacity-40"}`}
                >
                  {item.title}
                </span>
                <span
                  className="shrink-0"
                  style={{ opacity: item.published ? undefined : 0.4 }}
                >
                  {item.date}
                </span>
              </>
            );
            return item.published ? (
              <a
                key={item.href}
                href={item.href}
                title={item.title}
                style={rowStyle}
                className="flex items-baseline gap-4 py-2 group"
              >
                {inner}
              </a>
            ) : (
              <div
                key={item.href}
                style={rowStyle}
                className="flex items-baseline gap-4 py-2"
              >
                {inner}
              </div>
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
            title={link.label}
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
