import React from "react";

function AboutNumbers() {
	return (
		<section class="py-20">
			<div class="mx-auto px-4 sm:px-6 lg:px-8">
				<h2 class="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
					Our results in numbers
				</h2>
				<div class="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
					<div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-slate-300">
						<div class="flex gap-5">
							<div class="font-manrope text-2xl font-bold text-indigo-600">
								150+
							</div>
							<div class="flex-1">
								<h4 class="text-xl text-gray-900 font-semibold mb-2">
									Students 
								</h4>
								<p class="text-xs text-gray-500 leading-5">
									Company's remarkable growth journey as we continually innovate
									and drive towards new heights of success.
								</p>
							</div>
						</div>
					</div>
					<div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-slate-300">
						<div class="flex gap-5">
							<div class="font-manrope text-2xl font-bold text-indigo-600">
								175+
							</div>
							<div class="flex-1">
								<h4 class="text-xl text-gray-900 font-semibold mb-2">
									Company growth
								</h4>
								<p class="text-xs text-gray-500 leading-5">
									Our very talented team members are the powerhouse of pagedone
									and pillars of our success.{" "}
								</p>
							</div>
						</div>
					</div>
					<div class="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-slate-300">
						<div class="flex gap-5">
							<div class="font-manrope text-2xl font-bold text-indigo-600">
								625+
							</div>
							<div class="flex-1">
								<h4 class="text-xl text-gray-900 font-semibold mb-2">
									Projects Completed
								</h4>
								<p class="text-xs text-gray-500 leading-5">
									We have accomplished more than 625 projects worldwide and we
									are still counting many more.
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
