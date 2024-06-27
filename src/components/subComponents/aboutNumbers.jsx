import React from "react";

function AboutNumbers() {
	return (
		<section className="py-20">
			<div className="md:mx-auto mx-2">
				<h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
					Our results in numbers
				</h2>
				<div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
					<div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-slate-300">
						<div className="flex gap-5">
							<div className="text-4xl font-bold text-secondary">150+</div>
							<div className="flex-1">
								<h4 className="text-xl text-gray-900 font-semibold mb-2">
									Students
								</h4>
								<p className="text-gray-700 leading-5">
									Empowering over 150 students with essential programming skills
									through our engaging courses.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-slate-300">
						<div className="flex gap-5">
							<div className="text-4xl font-bold text-secondary">20+</div>
							<div className="flex-1">
								<h4 className="text-xl text-gray-900 font-semibold mb-2">
									Projects
								</h4>
								<p className="text-gray-700 leading-5">
									Successfully delivered over 20 innovative projects,
									transforming ideas into impactful digital solutions.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-slate-300">
						<div className="flex gap-5">
							<div className="text-4xl font-bold text-secondary">
								<span className="invisible">0</span>
								<span className="invisible">0</span>5
							</div>
							<div className="flex-1">
								<h4 className="text-xl text-gray-900 font-semibold mb-2">
									Partners
								</h4>
								<p className="text-gray-700 leading-5">
									Collaborating with 5 trusted partners to expand our reach and
									deliver excellence in software development and education.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutNumbers;
