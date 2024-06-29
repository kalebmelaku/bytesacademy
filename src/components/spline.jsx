import Spline from "@splinetool/react-spline";
import React from "react";
import Lottie from "lottie-react";
import Code from '../Code.json'

function SplineComponent() {
	return (
		<div className="w-full hidden md:flex items-stretch justify-stretch">
			<Lottie animationData={Code} loop={true} />;
			{/* <Spline
				className="w-full"
				scene="https://prod.spline.design/EKdu9E-fuGrC95wJ/scene.splinecode"
			/> */}
		</div>
	);
}

export default SplineComponent;
