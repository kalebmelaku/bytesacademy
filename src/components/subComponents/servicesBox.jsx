import React from "react";
import { FaLaptopCode } from "react-icons/fa";
function ServicesBox(props) {
	const title = props.title;
	const desc = props.desc;
	const icon = props.icon;
	const list = props.list;

	return (
		<>
			<div className="flex flex-col sm:flex-row px-4">
				<div className="sm:mr-4">
					<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary">
						{/* <FaLaptopCode className="text-4xl text-white" /> */}
						{icon}
						{/* <svg
							className="w-12 h-12 text-secondary"
							stroke="currentColor"
							viewBox="0 0 52 52"
						>
							<polygon
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
								fill="none"
								points="29 13 14 29 25 29 23 39 38 23 27 23"
							></polygon>
						</svg> */}
					</div>
				</div>
				<div>
					<h6 className="mb-2 font-semibold leading-5">{title}</h6>
					<p className="mb-3 text-sm text-gray-900">{desc}</p>
					<ul className="mb-4 -ml-1 space-y-2">
						{list.map((element, index) => {
							return (
								<li className="flex items-start" key={index}>
									<span className="mr-1">
										<svg
											className="w-5 h-5 mt-px text-secondary"
											stroke="currentColor"
											viewBox="0 0 52 52"
										>
											<polygon
												stroke-width="4"
												stroke-linecap="round"
												stroke-linejoin="round"
												fill="none"
												points="29 13 14 29 25 29 23 39 38 23 27 23"
											></polygon>
										</svg>
									</span>
									{element}
								</li>
							);
						})}

						{/* <li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-secondary"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</span>
						</li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-secondary"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</span>
							Business Website
						</li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-secondary"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</span>
							School Website
						</li> */}
					</ul>
				</div>
			</div>
			{/* <div className="flex flex-col sm:flex-row">
				<div className="sm:mr-4">
					<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
						<svg
							className="w-12 h-12 text-secondary"
							stroke="currentColor"
							viewBox="0 0 52 52"
						>
							<polygon
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
								fill="none"
								points="29 13 14 29 25 29 23 39 38 23 27 23"
							></polygon>
						</svg>
					</div>
				</div>
				<div>
					<h6 className="mb-2 font-semibold leading-5">Social Media Marketing:</h6>
					<p className="mb-3 text-sm text-gray-900">
						Our social media marketing service helps businesses establish a
						strong online presence and engage with their target audience
						effectively.
					</p>
					<ul className="mb-4 -ml-1 space-y-2">
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-secondary"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</span>
							Computers
						</li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-secondary"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</span>
							Health
						</li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-secondary"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</span>
							Reference
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row">
				<div className="sm:mr-4">
					<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
						<svg
							className="w-12 h-12 text-secondary"
							stroke="currentColor"
							viewBox="0 0 52 52"
						>
							<polygon
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
								fill="none"
								points="29 13 14 29 25 29 23 39 38 23 27 23"
							></polygon>
						</svg>
					</div>
				</div>
				<div>
					<h6 className="mb-2 font-semibold leading-5">
						Content Writing and Copywriting:
					</h6>
					<p className="mb-3 text-sm text-gray-900">
						Our content writing and copywriting service offers high-quality and
						engaging content that captivates your audience and drives
						conversions.
					</p>
					<ul className="mb-4 -ml-1 space-y-2">
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-secondary"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</span>
							Computers
						</li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-secondary"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</span>
							Health
						</li>
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-secondary"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										stroke-width="4"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									></polygon>
								</svg>
							</span>
							Reference
						</li>
					</ul>
				</div>
			</div> */}
		</>
	);
}

export default ServicesBox;
