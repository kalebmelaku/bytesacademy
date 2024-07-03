import axios from "axios";
import React, { useEffect, useState } from "react";

function Admin() {
	useEffect(() => {
		document.querySelector("footer").classList.add("hidden");
	});
	const [studentCounts, setStudentCounts] = useState({
		total: 0,
		html: 0,
		js: 0,
		react: 0,
	});
	// useEffect(() => {
	// 	const ws = new WebSocket(`ws://${import.meta.env.VITE_API_KEY}`);

	// 	ws.onmessage = (event) => {
	// 		const data = JSON.parse(event.data);
	// 		setStudentCounts(data);
	// 	};

	// 	ws.onclose = () => {
	// 		console.log("WebSocket connection closed");
	// 	};

	// 	return () => {
	// 		ws.close();
	// 	};
	// }, []);
	useEffect(() => {
		const fetchStudentCounts = async () => {
			try {
				const response = await axios.get(
					"https://bytesacademy.drhibistpedriatician.com/fetchRegStudents"
				); // Adjust URL as per your backend setup
				setStudentCounts(response.data);
			} catch (error) {
				console.error("Error fetching student counts:", error);
			}
		};

		setInterval(() => {
			fetchStudentCounts();
		}, 10000);
	}, []);
	return (
		<>
			<div className="flex items-center justify-center  w-full sm:mx-auto lg:max-w-full lg:grid-cols-1">
				<div className="w-full bg-white mx-auto mt-10 rounded-md shadow-md hover:shadow-lg h-auto relative border-l border-r pb-4 xl:pb-0">
					<div className="p-4 mb-4 rounded-b-md ">
						<h3 className="text-5xl font-medium mb-2 text-center">Total</h3>
						<p className="text-gray-700 text-9xl mb-4 line-clamp-6 text-center">
							{studentCounts.total}
						</p>
					</div>
				</div>
				<div className="grid absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-full gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
					<div className="w-full bg-white mx-auto rounded-md shadow-md hover:shadow-lg h-auto relative border-l border-r pb-4 xl:pb-0">
						<div className="p-4 mb-4 rounded-b-md ">
							<h3 className="text-5xl font-medium mb-2 text-center">
								HTML AND CSS
							</h3>
							<p className="text-gray-700 text-9xl mb-4 line-clamp-6 text-center">
								{studentCounts.html}
							</p>
						</div>
					</div>
					<div className="w-full bg-white mx-auto rounded-md shadow-md hover:shadow-lg h-auto relative border-l border-r pb-4 xl:pb-0">
						<div className="p-4 mb-4 rounded-b-md ">
							<h3 className="text-5xl font-medium mb-2 text-center">JS</h3>
							<p className="text-gray-700 text-9xl mb-4 line-clamp-6 text-center">
								{studentCounts.js}
							</p>
						</div>
					</div>
					<div className="w-full bg-white mx-auto rounded-md shadow-md hover:shadow-lg h-auto relative border-l border-r pb-4 xl:pb-0">
						<div className="p-4 mb-4 rounded-b-md ">
							<h3 className="text-5xl font-medium mb-2 text-center">REACT</h3>
							<p className="text-gray-700 text-9xl mb-4 line-clamp-6 text-center">
								{studentCounts.react}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Admin;
