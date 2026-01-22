"use client";

import { Experience } from "@/components/Experience";
import { useState } from "react";

export default function Home() {
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="w-100">
      <p className="bold-text">Hi, I’m Megan Pearson</p>
      <p>
        I’ve been building software for 11 years. For the last several years, I’ve been leading teams to do so.
      </p>
      <p>
        Previously, I’ve led product and engineering at{" "}
        <a href="https://www.raycast.com/">Raycast</a>,{" "}
        <a href="https://pitch.com/">Pitch</a>, and design studio{" "}
        <a href="https://bakkenbaeck.com/">Bakken & Bæck</a>. 
        
        Most recently, at Raycast, I led AI & iOS, where I directed the development of AI infrastructure to deliver reliable, performant AI features, including evaluation systems, feedback pipelines, and automated model integration. 
        <br />
        <br />
        I drove significant reliability improvements while conducting user research that shaped our broader AI product strategy, and evolved AI from exploratory features to production-grade systems (20% paid adoption, 108% reliability improvement). Guiding the team that shipped our iOS app, it became <em>App of the Day</em>&nbsp; in all markets. And, I scaled our backend teams 3<span className="text-xs align-middle ps-[2px]">×</span>. 
        <br />
        <br />
        Before working in tech, I was a pilot and flight instructor teaching students to fly and prepare for private and commerical pilot certificates.{" "}
      </p>

      <div>
        <p>
          <a
            className="block"
            href="https://www.linkedin.com/in/meganepearson/"
            target="_blank"
          >
            Find my resumé on LinkedIn
          </a>
          <a className="block" href="mailto:megan.e.pearson@gmail.com" target="_blank">
            Send me an email
          </a>
        </p>
        { /* <p>
          <button onClick={() => setShowCV(!showCV)}>CV</button>
        </p>
        <div>{showCV && <Experience />}</div>*/ }
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
