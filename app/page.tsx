"use client";

import LinkPreview from "./components/LinkPreview";

export default function Home() {
  return (
    <div className="w-[500]">
      <p className="bold-text">Hi, I’m Megan Pearson</p>
      <p>
        I’ve been building software for more than a decade. For the last several
        years, I’ve been leading teams to do so.
      </p>
      <p>
        Previously, I’ve led product and engineering at{" "}
        <LinkPreview href="https://www.raycast.com/">Raycast</LinkPreview>,{" "}
        <LinkPreview href="https://pitch.com/">Pitch</LinkPreview>, and design
        studio{" "}
        <LinkPreview href="https://bakkenbaeck.com/">Bakken & Bæck</LinkPreview>
        . Most recently, at Raycast, I led AI & iOS, where I directed the
        development of AI infrastructure to deliver reliable, performant AI
        features—including evaluation systems, feedback pipelines, and automated
        model integration.
      </p>
      <p>
        I drove significant reliability improvements while conducting user
        research that shaped our broader AI product strategy, and evolved AI
        from exploratory features to production-grade systems (20% paid
        adoption, 108% reliability improvement). Guiding the team that shipped
        our iOS app, it became{" "}
        <span className="italic-text">App of the Day </span>
        in all markets. And, I scaled our backend teams 3
        <span className="text-xs align-middle ps-[2px]">×</span>.
      </p>
      <p>
        Before working in tech, I was a pilot and flight instructor teaching
        students to fly and prepare for private and commerical pilot
        certificates.
      </p>
      <p>
        When not working, I’m often running: a 2
        <span className="text-xs align-middle ps-[2px]">×</span> marathoner, I
        ran marathons in Amsterdam (2024) and Berlin (2025).{" "}
      </p>

      <div className="contact-section">
        <p>
          <span className="status-dot"></span>
          Available for work from February 2026. 
        </p>
        <p>
          <a
            className="block"
            href="https://www.linkedin.com/in/meganepearson/"
            target="_blank"
          >
            Find my CV on LinkedIn
          </a>
          <a
            className="block"
            href="mailto:megan.e.pearson@gmail.com"
            target="_blank"
          >
            Send me an email
          </a>
        </p>
      </div>
    </div>
  );
}
