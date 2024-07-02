import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function ConfirmReg(props) {
	const error = props.error;
	const status = props.status;

	return (
		<div
			className={`${
				status === 200
					? "bg-green-200 px-6 py-4 mx-2 mb-8  rounded-md text-lg flex items-center md:mx-auto max-w-lg"
					: "bg-red-200 px-6 py-4 mx-2 mb-8  rounded-md text-lg flex items-center md:mx-auto max-w-lg"
			}`}
		>
			<svg
				viewBox="0 0 24 24"
				className={`${
					status === 200
						? "text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
						: "text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
				}`}
			>
				<path
					fill="currentColor"
					d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
				></path>
			</svg>
			<span
				className={`${
					status === 200
						? "text-green-800 w-full whitespace-nowrap"
						: "text-red-800 w-full whitespace-nowrap"
				}`}
			>
				{error}
			</span>
		</div>
	);
}

export default ConfirmReg;
