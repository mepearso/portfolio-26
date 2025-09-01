import experienceData from "../data/experience.json";

export default function Experience() {
  return (
    <section className="w-1/2">
      <h1>Experience</h1>
      {experienceData.map((job, index) => (
        <div key={index} className={index === 0 ? "mt-3 mb-3" : "mb-3"}>
          {Object.entries(job).map(([key, value]) => (
            <p key={key}>{value}</p>
          ))}
        </div>
      ))}
    </section>
  );
}
