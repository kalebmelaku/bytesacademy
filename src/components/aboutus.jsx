import React from "react";
import Line from "./subComponents/line";
import AboutCourse from "./subComponents/aboutCourse";
import AboutDevelopment from "./subComponents/aboutDevelopment";
import AboutNumbers from "./subComponents/aboutNumbers";

function AboutUs() {
	return (
		<>
			<section className="overflow-hidden container md:mx-auto pt-10 pb-12 md:pt-20 lg:pb-[60px]" id="about">
				{/* <div className="flex items-center my-10">
					<Line color="black" />
					<span className="text-3xl">About Us</span>
				</div> */}
				<AboutCourse />
				<AboutDevelopment />
				<AboutNumbers/>
			</section>
		</>
	);
}

export default AboutUs;
