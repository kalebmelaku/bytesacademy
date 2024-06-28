import React from "react";
import ServicesBox from "./subComponents/servicesBox";
import { FaLaptopCode } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
function Services() {
	return (
		<div
			className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20"
			id="services"
		>
			<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
				<div>
					<p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary text-white">
						Services
					</p>
				</div>
				<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
					How We Change The Game
				</h2>
				<p className="text-base text-gray-700 md:text-lg">
					We provide online programming courses and software development
				</p>
			</div>
			<div className="grid gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
				<ServicesBox
					title="Website Development"
					desc="Our website development service offers end-to-end solutions for creating and launching professional and visually appealing websites for:"
					list={["Personal Website", "Business Website", "School Website"]}
					icon={<FaLaptopCode className="text-4xl text-white" />}
				/>
				<ServicesBox
					title="Online Courses"
					desc="Our online programming courses cover all essentials including frontend, backend, and mobile app creation."
					list={["Frontend Development", "Backend Development", "Mobile App"]}
					icon={<MdCastForEducation className="text-4xl text-white" />}
				/>
				<ServicesBox
					title="System Development"
					desc="We specialize in developing tailored systems for hospitals, e-commerce platforms, and inventory management that will drive sales growth."
					list={["Hospital System", "Ecommerce", "Inventory System"]}
					icon={<GrSystem className="text-4xl text-white" />}
				/>
			</div>
		</div>
	);
}

export default Services;
