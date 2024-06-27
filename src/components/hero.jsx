import React from "react";
import HeroText from "./heroText";
import SplineComponent from "./spline";

function Hero() {
	return (
		<div className="md:h-[800px] flex items-top justify-between bg-gradient-to-r from-[#91B8E0] to-[#9BA1C5] rounded-xl mt-2 mx-2" id="home">
				<HeroText />
				<SplineComponent />
			</div>
	);
}

export default Hero;
