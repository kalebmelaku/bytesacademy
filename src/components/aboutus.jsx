import React from "react";
import Line from "./subComponents/line";
import AboutCourse from "./subComponents/aboutCourse";
import AboutDevelopment from "./subComponents/aboutDevelopment";
import AboutNumbers from "./subComponents/aboutNumbers";

function AboutUs() {
	return (
		<>
			<div
				className="overflow-hidden container md:mx-auto pt-10 pb-12 md:pt-12 lg:pb-[10px]"
				id="about"
			>
				<AboutCourse />
				<AboutDevelopment />
				<AboutNumbers />
			</div>
		</>
	);
}

export default AboutUs;
