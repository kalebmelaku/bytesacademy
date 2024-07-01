import React from "react";
import Lottie from "lottie-react";
import ComingSoon from "../../ComingSoon.json";
function CourseOverlay() {
	return (
		<div className="absolute inset-0 bg-secondary bg-opacity-75 flex items-center justify-center rounded-md">
			<span className="text-white text-lg font-bold">
				<Lottie animationData={ComingSoon} loop={true} />
			</span>
		</div>
	);
}

export default CourseOverlay;
