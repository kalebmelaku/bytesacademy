import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaGraduationCap } from "react-icons/fa";

function Courses() {
	const { id } = useParams();
	const [courses, setCourses] = useState([]);
	const [currCourse, setCurrCourse] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get("/data/data.json");
			setCourses(response.data["courses"]);
		};
		getData();
	}, []);

	useEffect(() => {
		if (courses.length > 0) {
			const foundCourse = courses.find((course) => course.id === parseInt(id));
			setCurrCourse(foundCourse);
		}
	}, [courses, id]);

	useEffect(() => {}, [id, currCourse]);

	if (!currCourse) {
		return <div>Loading...</div>;
	}

	const { title, desc, price, img, whatToLearn, requirement } = currCourse;
	return (
		<>
			<Navbar />
			<div className="relative font-montserrat md:mx-auto mx-2 bg-red-600 h-[70vh] overflow-hidden flex items-center flex-col justify-center">
				<img className="w-full h-full" src={img} alt="" />
				<div className="bg-black w-full h-full absolute top-0 left-0 opacity-80">
					<div className="py-3 z-50 font-montserrat container md:mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
						<h1 className="text-center text-4xl xl:text-6xl text-white">
							{title}
						</h1>
						<p className="text-center text-xl xl:text-xl text-white md:w-1/2 ml-auto mr-auto py-4">
							{desc}
						</p>
						<div className="flex justify-center mt-4">
							<Link
								className="bg-secondary md:bg-primary rounded-md px-4 md:px-14 py-5 text-lg font-semibold hover:bg-primary md:hover:secondary  hover:text-white transition-colors duration-300 lg:flex items-center justify-around"
								to={"/register"}
							>
								<FaGraduationCap className="text-2xl mr-4 hidden md:block" />
								Register for {price}
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="py-3 font-montserrat container md:mx-auto flex flex-col justify-start items-center">
				<h1 className="text-2xl font-semibold">What You Will Learn</h1>
				<ul className="ml-2">
					{whatToLearn.map((what) => {
						return <li className="ml-4 py-2">{what}</li>;
					})}
				</ul>
			</div>
			<div className="py-3 font-montserrat container md:mx-auto flex flex-col justify-start items-center">
				<h1 className="text-2xl font-semibold">Requirements</h1>
				<ul className="ml-2">
					{requirement.map((what) => {
						return <li className="ml-4 py-2">{what}</li>;
					})}
				</ul>
			</div>
		</>
	);
}

export default Courses;
