import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <section>
        <h1>Strategic Engineering</h1>
        <p>
          Hi, I'm Megan Pearson, an engineer from New York living in Amsterdam.
          Currently, I lead engineering teams at Raycast focused on building
          secure and useful AI; researching how people are using and adopting AI
          day to day; and generally wrestling with the state of technology.
        </p>
      </section>
      <div className="mt-10">
        <Projects />
        <Experience />
      </div>
      <section>
        <h1>What I like to do and want to do more of.</h1>
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
      </section>
    </div>
  );
}
