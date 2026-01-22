"use client";

import { Experience } from "@/components/Experience";
import { useState } from "react";

export default function Home() {
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="w-100">
      <p>
        Hi, I'm Megan Pearson, I've been building software for 11 years and
        leading teams to do so for the last several.
      </p>
      <p>
        I've led product and engineering at{" "}
        <a href="https://www.raycast.com/">Raycast</a>,{" "}
        <a href="https://pitch.com/">Pitch</a>, and innovation studio{" "}
        <a href="https://bakkenbaeck.com/">Bakken & Bæck</a>—evolving AI from
        exploratory features to production-grade systems (20% paid adoption,
        108% reliability improvement), scaling backend teams 3
        <span className="text-xs align-middle ps-[2px]">×</span>, and guiding
        the team that shipped an App of the Day iOS app.
      </p>
      <p>
        Before tech, I was a pilot and flight instructor teaching students to
        fly and prepare for private and commerical pilot certificates.{" "}
      </p>
      <p>
        2<span className="text-xs align-middle ps-[2px]">×</span> marathoner
        (Amsterdam 2024 & Berlin 2025)
      </p>

      <div>
        <p>
          <a
            className="block"
            href="https://www.linkedin.com/in/meganepearson/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a className="block" href="https://x.com/megantronic" target="_blank">
            X
          </a>
        </p>
        <p>
          <button onClick={() => setShowCV(!showCV)}>CV</button>
        </p>
        <div>{showCV && <Experience />}</div>
      </div>

      {/* <div>
        <h2>Projects</h2>
        <Projects />
      </div>
      <div>
        <h2>Experience</h2>
        <Experience />
      </div> */}
    </div>
  );
}
