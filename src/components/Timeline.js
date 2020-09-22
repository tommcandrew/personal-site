import React from "react";

const Timeline = ({ projects, currentIndex, animating, setCurrentIndex }) => {
  return (
    <div className="timeline__wrapper">
      <div className="timeline__line">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`timeline__circle ${
              currentIndex === index ? "timeline__selected" : ""
            } ${animating ? "animating" : ""}`}
          >
            <span className="timeline__date">{project.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
