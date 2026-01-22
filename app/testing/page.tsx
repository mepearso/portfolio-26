import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <h1>Megan Pearson</h1>
        <h2>Strategic Engineering</h2>
      </div>
      <div className="mr-20">
        <p>
          Hi, I'm Megan Pearson, an engineer from New York living in Amsterdam.
          Currently, I lead engineering teams at Raycast focused on building
          secure and useful AI; research how people are using and adopting AI
          day to day; and am generally wrestling with the state of technology.
        </p>
        <p>
          I want to collaborate with people to find innovative solutions to
          complex problems, using technology as a force for positive change. I'm
          not convinced the last 20 years of tech have lived up to the promise
          or capacity that was possible.
        </p>
        <p>
          I want to spend the next 20 working towards a better standard. I want
          to work on products and projects that move us in a better direction. I
          want to solve real problems.
        </p>
      </div>
      <div>
        <h2>Projects</h2>
      </div>
      <Projects />
      <div>
        <h2>Experience</h2>
      </div>
      <Experience />
    </div>
  );
}
