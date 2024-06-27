import React from "react";
import { Link } from "react-router-dom";
function HeroText() {
	return (
		<div className="md:ml-10 flex flex-col px-5 py-20 lg:py-40 lg:justify-center">
			<p className="pb-5 text-lg flex items-center">
				<div className="w-10 h-[2px] bg-white md:mr-3"></div>
				Welcome to Bytes Academy
			</p>
			<p className="text-4xl lg:text-7xl pb-3 font-aclonica">
				The New Way To Learn Online
			</p>
			<p className="md:text-xl lg:w-full mb-5 py-3">
				Discover a new way to learn programming online with personalized
				learning schedules tailored to your needs, all at an affordable price.
			</p>
			<div className="ctas mt-5">
				<Link
					className="text-lg font-semibold z-20 bg-white rounded-lg px-10 py-3 hover:bg-secondary hover:text-white transition-colors duration-300"
					to={"/#learnmore"}
				>
					Learn More
				</Link>
				{/* <Link className="text-lg font-semibold text-white outline outline-white bg-secondary rounded-lg px-10 py-3 ml-5" to={'/#learnmore'}>Learn More</Link> */}
			</div>
		</div>
	);
}

export default HeroText;
