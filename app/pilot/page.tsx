"use client";
import Header from "../components/Header";
import ImageMarquee from "../components/ImageMarquee";

export default function PilotPage() {
  return (
    <div className="min-h-screen bg-[var(--beige)]">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl text-gray-900 mb-4">Pilot</h2>
        <p className="mb-8 text-lg text-gray-600">
          My journey began two decades ago as a pilot and flight instructor at
          Purdue University Airport, where I developed a deep appreciation for
          precision, safety, and systematic thinking.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl text-gray-900 mb-4">Flight Experience</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Private Pilot License</li>
            <li>• Flight Instructor</li>
            <li>• Piper Warrior & King Air experience</li>
            <li>• Purdue University Airport</li>
          </ul>
        </div>
      </main>

      {/* Image Marquee - full width to edges, stuck to bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <ImageMarquee
          images={[
            "/images/pilot_1.jpg",
            "/images/purdue_piper_warrior.jpg",
            "/images/pilot_2.jpg",
            "/images/pilot_3.jpg",
            "/images/kingair.jpg",
            "/images/pilot_4.jpg",
          ]}
          speed={40}
          direction="left"
        />
      </div>
    </div>
  );
}
