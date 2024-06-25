import React from "react";
import HeroText from "./heroText";
import SplineComponent from "./spline";

function Hero() {
	return (
			<div className="md:h-[800px] mx-2 md:mx-0 flex items-top justify-between bg-gradient-to-r from-[#91B8E0] to-[#9BA1C5] w-full rounded-xl mt-2">
				<HeroText />
				<SplineComponent />
			</div>
	);
}

export default Hero;
