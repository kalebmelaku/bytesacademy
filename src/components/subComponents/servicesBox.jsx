import React from "react";
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
						{icon}
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
												strokeWidth="4"
												strokeLinecap="round"
												strokeLinejoin="round"
												fill="none"
												points="29 13 14 29 25 29 23 39 38 23 27 23"
											></polygon>
										</svg>
									</span>
									{element}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default ServicesBox;
