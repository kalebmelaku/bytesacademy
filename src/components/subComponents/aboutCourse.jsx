import React from "react";
import Dots from "./dots";
import CourseOne from '../../assets/CourseOne.jpg'
import CourseTwo from '../../assets/courseTwo.jpeg'
import CourseThree from '../../assets/courseThree.jpeg'
function AboutCourse() {
	return (
		<div className="container mx-auto">
			<div className="flex flex-wrap items-center justify-between -mx-4">
				<div className="w-full px-4 lg:w-6/12 order-2 md:order-1">
					<div className="flex items-center -mx-3 sm:-mx-4">
						<div className="w-full px-3 sm:px-4 xl:w-1/2">
							<div className="py-3 sm:py-4">
								<img
									src={CourseOne}
									alt=""
									className="w-full rounded-2xl"
								/>
							</div>
							<div className="py-3 sm:py-4">
								<img
									src={CourseTwo}
									alt=""
									className="w-full rounded-2xl"
								/>
							</div>
						</div>
						<div className="w-full px-3 sm:px-4 xl:w-1/2">
							<div className="relative z-10 my-4">
								<img
									src={CourseThree}
									alt=""
									className="w-full rounded-2xl"
								/>
								<Dots />
							</div>
						</div>
					</div>
				</div>

				<div className="w-full px-4 lg:w-1/2 xl:w-5/12 order-1 md:order-2">
					<div className="mt-10 lg:mt-0">
						<span className="block text-xl font-semibold text-primary">
							Why Choose Us
						</span>
						<h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
							Unlock Your Coding Potential with Expert-Led Online Classes
						</h2>
						<p className="mb-5 text-base text-body-color ">
							Welcome to Bytes Academy, where we turn your coding dreams into
							reality! At Bytes Academy, we offer a dynamic range of online
							programming classes designed for all skill levels. Whether you're
							just starting out with our Front-End Basics, honing your skills in
							Front-End Advanced, diving into the depths of Backend development,
							or creating the next big Mobile App, we've got you covered.
						</p>
						<p className="mb-8 text-base text-body-color ">
							Our expert instructors and real-world projects ensure you gain the
							practical experience needed to excel. Join us and become a part of
							the next generation of software developers!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutCourse;
