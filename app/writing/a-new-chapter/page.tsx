import Image from "next/image";
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
        <div className="flex flex-col gap-1">
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

      {/* Main content — centred by layout’s justify-center */}
      <div className="w-[560px]">
        {/* Mobile-only home link — sidebar handles this on md+ */}
        <a
          href="/"
          title="Back to home"
          className="md:hidden bold-text mb-12 block hover:opacity-70 transition-opacity"
          style={{ color: "var(--foreground)", textDecoration: "none" }}
        >
          Megan Pearson
        </a>
        <div className="bold-text mb-6 md:mb-12" style={{ lineHeight: 1 }}>
          A New Chapter
        </div>
        <div className="mb-6 md:mb-12">
          <p className="lede" style={{ marginBottom: "2rem" }}>
            This month I started a new chapter – one that feels like stepping
            into the future, while at the same time, very much like coming home.
          </p>
          <p>
            When I was 14, I started flying airplanes. By 21 I was a flight
            instructor, and working as an industrial engineer at UPS. I traveled
            around the US to various hubs in Denver, Chicago, and Seattle to
            work directly with aircraft mechanics. The engineering work I was
            doing there focused on improving their daily work. I observed their
            workflows to understand their constraints and figured out how I
            could make their jobs easier. I got to learn what made their work
            difficult and see firsthand how the improvements I’d design made a
            difference in their day to day.
          </p>
          <p>
            I was building things that changed how people operate, and I valued
            it deeply. I’ve been drawn to that kind of work ever since.
          </p>
          <p>
            I carried that instinct forward when I worked at{" "}
            <LinkPreview href="https://bakkenbaeck.com/" target="_blank">
              Bakken & Bæck
            </LinkPreview>
            . The projects I worked on – a startup delivering household goods in
            reusable packaging, an app that made it easy for non-technical folks
            to automate devices in their homes according to the weather, a
            platform to give you more control over selling your house – removed
            real friction, for real people.
          </p>
          <p>
            During COVID, I joined{" "}
            <LinkPreview href="https://pitch.com/" target="_blank">
              Pitch
            </LinkPreview>{" "}
            building presentation software. While we were all cooped up and
            working from home, I focused on how to help people communicate
            visually in an increasingly remote world. At{" "}
            <LinkPreview href="https://www.raycast.com/" target="_blank">
              Raycast
            </LinkPreview>{" "}
            I optimized developer workflows, led our AI work, and measured
            muscle memory gains.{" "}
          </p>
          <p>
            But along the way, I realized I was{" "}
            <span className="bold-text">
              building tools for people building tools
            </span>
            . At a time when the wider world seemed to face increasing
            challenges, I felt I was leaving real problems to sit unsolved, and
            I missed working on something tangible.
          </p>
          <p>
            So for the last few months, I took some time away – a short
            sabbatical to think about what I wanted to do next. I spent time
            researching, experimenting with some new ideas (some of which I
            built out and might share soon) and talking to a lot of people.
            Conversations ranging from cybersecurity in the age of AI, to
            commercial greenhouse gardening, to maintaining and evolving “taste”
            (again, in the age of AI).
          </p>
          <p>
            One of these conversations had me chatting with Tomaz Stolfa – CEO
            and Co-Founder of{" "}
            <LinkPreview href="https://sunriserobotics.co/" target="_blank">
              Sunrise Robotics
            </LinkPreview>{" "}
            – and a former colleague from my time at Pitch. We talked about
            industrial manufacturing, Europe’s aging workforce in this space,
            and Sunrise’s belief that automation could be done differently.
            Namely, by putting people first. Sunrise’s core mission is bold and
            clear: to augment humanity through intelligent robotics. Augment,
            not replace.
          </p>
          <Image
            src="/images/Sunrise_front.png"
            alt="Sunrise Robotics"
            width={2000}
            height={2000}
            className="w-full mb-6 md:mb-12"
          />
          <p>
            I, like I believe most people are, am hesitant about the idea of
            intelligent robotics (and the hype around it). There’s a very human
            reaction to robots replacing jobs that’s only exacerbated by the
            thought of layering AI into the mix. And, while “augmenting
            humanity” could skew towards marketing pitch, it is in fact why I’ve
            decided to join Sunrise.
          </p>
          <p>
            I’ll be heading up a new discipline we’re calling Cell Experience.
            It’s the layer where robotic “cells” meet real people on the factory
            floor, and the goal is ambitious: to set the standard for what good
            human ↔ machine experience should be. I’m asking: how do we build
            automation that works for humans, something people work{" "}
            <em>with</em>, not around?
          </p>
          <p>
            In this, I’ll be visiting our customers across Europe – working with
            folks in the field to understand their workflows, once again, and
            shape the experience of what it looks, sounds, and feels like to be
            working with our robots day to day. These are real people with real
            challenges that form the backbone of European manufacturing and now
            it’s our job to build for them, so they can build for everyone else.
          </p>
          <p>
            It feels like a huge challenge – like stepping into the future,
            while at the same time, very much like coming home.
          </p>
        </div>
      </div>
    </>
  );
}
