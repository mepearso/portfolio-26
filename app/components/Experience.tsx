import experienceData from "../data/experience.json";

export const Experience = () => {
  return (
    <section>
      {experienceData.map((job, index) => (
        <div key={index} className="mb-2">
          <div className="flex items-center">
            <div>{job.title}</div>
            <div className="flex-1 border-b border-dotted border-gray-400 mx-2"></div>
            <div>{job.company}</div>
          </div>
          {/* <div className="flex">
            <div>{job.dates}</div>
            <div className="mx-2">&middot;</div>
            <div>{job.location}</div>
          </div> */}
        </div>
      ))}
    </section>
  );
};
