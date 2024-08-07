import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { QuestionAnswer } from "@material-ui/icons";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#1a255a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#1a255a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            California Connections Academy
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 
            High School Diploma
          </h4>
          <p>4.0 GPA, 21 AP Credits. AP scholar with Distinction. 2019 Ripon Student of the Year </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: "#1a255a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            AI Research Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Inspirit AI, Stanford
          </h4>
          <p>Collaborated with Stanford & MIT PhDs to train several advanced computer vision models in healthcare and accessibility.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Present"
          iconStyle={{ background: "#F2A900", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of California, Los Angeles
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{ background: "#F2A900", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Head of Engineering & AI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Elegant Mind Lab @ UCLA
          </h4>
          <p>Spearheaded numerous GenAI centered multi-disciplinary projects utilizing Vision Transformers & LLMs.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2024 - Present"
          iconStyle={{ background: "#c9490e", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Dev & LMS Manager - Leadership & Golf
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
          Configured LMS and led onboarding process for students and instructors. Currently re-designing nonprofit's homepage.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Present - ???"
          iconStyle={{ background: "#292726", color: "#fff" }}
          icon={<QuestionAnswer />}
        >
          <h1 className="vertical-timeline-element-title">
            What's next?
          </h1>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;