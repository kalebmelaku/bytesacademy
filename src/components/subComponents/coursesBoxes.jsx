import React from "react";
import { Link } from "react-router-dom";

function CoursesBoxes(props) {
	const title = props.title;
	const desc = props.desc;
	const price = props.price;
	const img = props.img;
	const id = props.id;
	return (
		<div className="max-w-md mx-auto rounded-md shadow-md hover:shadow-lg h-auto">
			<div className="relative h-1/2 opacity-90 hover:opacity-100 transition-all duration-300 rounded-t-xl overflow-hidden">
				<img
					className="w-full h-full"
					src={img}
					alt="Product Image"
				/>
			</div>
			<div className="p-4 bg-slate-50 mb-4 rounded-b-md ">
				<h3 className="text-lg font-medium mb-2">{title}</h3>
				<p className="text-gray-700 text-sm mb-4 line-clamp-6">
					{desc}
				</p>
				<div className="flex items-center justify-between">
					<span className="font-bold text-lg">{price}</span>
					<Link
						to={`/courses/${id}`}
						className="bg-primary hover:bg-secondary text-black font-bold py-2 px-4 rounded transition-colors duration-200"
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CoursesBoxes;
