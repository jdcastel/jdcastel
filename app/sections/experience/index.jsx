"use effect"
import { LazyMotion, domAnimation } from "framer-motion";
import { HeadingDivider } from "components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";

export function ExperienceSection() {

	return (
		<LazyMotion features={domAnimation}>
			<section id="experience" className="section">
				<HeadingDivider title="My Experience" />
				<VerticalTimeline>
					<VerticalTimelineElement
						className="vertical-timeline-element--work text-black"
						date="Sep 2022 - Apr 2023"
						iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
						icon={<FaReact  size={32} />}
					>
						<h3 className="vertical-timeline-element-title text-black">Low Code Application Developer</h3>
						<h4 className="vertical-timeline-element-subtitle text-black">Ontario Government </h4>
						<p className="text-light">Developed a web-based project management application using the MERN stack that allowed clients to view the progress of pending tasks.<br/>Led a project team providing guidance and direction facilitating communication and collaboration to ensure timely and successful completion of the project.<br/>Collaborated with an agile team of developers and project managers to create a customized PowerApps application for over 1000 users.<br/>Contributed to the design and implementation of key features, such as data integration with existing systems and user-friendly interface design.<br/>Identified and resolved software bugs through rigorous testing and debugging.<br/>Improved the operational speed of applications by optimizing code and streamlining processes.</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work text-black"
						date="May 2022 - Sep 2022"
						iconStyle={{ background: "rgb(204, 16, 64)", color: "#fff" }}
						 icon={<FaReact  size={32} />}
					>
						<h3 className="vertical-timeline-element-title text-black">Technical Support Specialist Volunteer</h3>
						<h4 className="vertical-timeline-element-subtitle text-black">hispanotech.ca </h4>
						<p className="text-light">Worked closely with other technical support specialists to troubleshoot and resolve complex software issues.<br/>Provided clear and concise instructions for users to navigate the software features and functions, resulting in increased user adoption and satisfaction.<br/>Developed comprehensive process documentation to increase team efficiency and facilitate future troubleshooting.<br/>Demonstrated technical proficiency and problem-solving skills in resolving complex software issues.</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</section>
		</LazyMotion>
	);
}
