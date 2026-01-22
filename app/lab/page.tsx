"use client";
import { useState } from "react";
import Header from "../components/Header";

export default function LayoutStyle() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  const getPlaceholderColor = (word: string) => {
    switch (word) {
      case "useful":
        return "bg-blue-200";
      case "scalable":
        return "bg-green-200";
      case "private":
        return "bg-purple-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-[var(--beige)] relative">
      {/* Right side - hover placeholder (full height, underlays everything) */}
      <div className="absolute right-0 top-0 w-[70%] h-full z-0">
        {hoveredWord ? (
          <div
            className={`w-full h-full ${getPlaceholderColor(
              hoveredWord
            )} flex items-center justify-center transition-all duration-300 ease-in-out backdrop-blur-xl`}
            style={{
              boxShadow: "inset 0 0 50px rgba(255, 255, 255, 0.2)",
              filter: "blur(.5px)",
            }}
          >
            <span className="text-gray-700 font-medium text-2xl">
              {hoveredWord.charAt(0).toUpperCase() + hoveredWord.slice(1)} Work
            </span>
          </div>
        ) : (
          <div
            className="w-full h-full bg-gray-100 flex items-center justify-center backdrop-blur-sm"
            style={{
              boxShadow: "inset 0 0 50px rgba(255, 255, 255, 0.1)",
              filter: "blur(0.5px)",
            }}
          >
            <span className="text-gray-400 text-xl">...</span>
          </div>
        )}
      </div>

      <Header />

      {/* Main Content */}
      <main className="relative z-10 p-12">
        <div className="max-w-2xl">
          <div>
            <h2 className="text-4xl text-gray-900 mb-4">Now</h2>
            <p className="mb-8">
              Product Engineering Manager <br />
              Focused on building{" "}
              <span
                className="cursor-pointer hover:text-blue-600 transition-colors duration-200 shimmer-effect useful"
                onMouseEnter={() => setHoveredWord("useful")}
                onMouseLeave={() => setHoveredWord(null)}
              >
                useful
              </span>
              ,{" "}
              <span
                className="cursor-pointer hover:text-green-600 transition-colors duration-200 shimmer-effect scalable"
                onMouseEnter={() => setHoveredWord("scalable")}
                onMouseLeave={() => setHoveredWord(null)}
              >
                scalable
              </span>
              ,{" "}
              <span
                className="cursor-pointer hover:text-purple-600 transition-colors duration-200 shimmer-effect private"
                onMouseEnter={() => setHoveredWord("private")}
                onMouseLeave={() => setHoveredWord(null)}
              >
                private
              </span>{" "}
              AI <br />
              Deeply thinking about the human{" "}
              <svg
                className="inline-block w-6 h-6 align-middle"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L3 12L7 7" />
                <path d="M17 7L21 12L17 17" />
                <path d="M3 12H21" />
              </svg>{" "}
              AI experience
            </p>
            <div>
              <h2 className="text-4xl text-gray-900 mb-4">Then</h2>
              <p className="mb-8">
                Over 10 years of experience building products from 0 to 1
                <br />
                From agency to startup, innovation to scale, and always hands on
              </p>
              <ul>
                <li>Technical Product Manager</li>
                <li>Senior Software Engineer</li>
                <li>Software Engineer</li>
                <li>Founder</li>
                <li>Pilot</li>
              </ul>
              {/* Dreamed of being a marine biologist. Became a pilot. Found my way to tech and now build at the bleeding edge of AI. */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-4 px-6 z-10">
        <div className="flex gap-6">
          <a
            href="/"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            Github
          </a>
          <a
            href="/"
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}
