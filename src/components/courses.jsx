import React, { useEffect, useState } from "react";
import CoursesBoxes from "./subComponents/coursesBoxes";
import axios from "axios";

function Courses() {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const response = await axios.get("/data/data.json");
			setCourses(response.data["courses"]);
		};
		getData();
	}, []);
	return (
		<div
			className="overflow-hidden container md:mx-auto pt-10 pb-12 md:pt-12 lg:pb-[10px]"
			id="courses"
		>
			<p className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
				Level up your web development skills
			</p>
			<div className="grid gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
				{courses.map((course, index) => {
					return (
						<CoursesBoxes
							key={index}
							id={course.id}
							title={course.title}
							desc={course.desc}
							img={course.img}
							price={course.price}
							status = {course.status}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Courses;
