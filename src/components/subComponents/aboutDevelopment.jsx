import React from "react";
import Dots from "./dots";
import ProjectOne from '../../assets/ProjectOne.jpg';
import ProjectTwo from '../../assets/ProjectTwo.jpg';
import ProjectThree from '../../assets/ProjectThree.jpg';
function AboutDevelopment() {
	return (
		<div className="container mx-auto">
			<div className="flex flex-wrap items-center justify-between -mx-4">
				<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
					<div className="mt-10 lg:mt-0">
						<span className="block text-xl font-semibold text-primary">
							What We Provide
						</span>
						<h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
							Transform Your Vision with Custom Digital Solutions
						</h2>
						<p className="mb-5 text-base text-body-color ">
							## About Us Welcome to Bytes Academy, your premier choice for
							professional software development services. We specialize in
							creating custom digital solutions that meet your unique needs.
							From sleek and user-friendly websites to powerful and efficient
							mobile apps, our team of experienced developers ensures your
							project stands out.
						</p>
						<p className="mb-8 text-base text-body-color ">
							We also excel in developing comprehensive system management
							software for various industries, including inventory management,
							clinics, pharmacies, schools, and online shops. We handle all the
							technical details, so you can focus on your vision. Partner with
							Bytes Academy and let us turn your ideas into reality with
							innovative and reliable software solutions.
						</p>
					</div>
				</div>
				<div className="w-full px-4 lg:w-6/12">
					<div className="flex items-center -mx-3 sm:-mx-4">
						<div className="w-full px-3 sm:px-4 xl:w-1/2">
							<div className="py-3 sm:py-4">
								<img
									src={ProjectOne}
									alt=""
									className="w-full rounded-2xl"
								/>
							</div>
							<div className="py-3 sm:py-4">
								<img
									src={ProjectTwo}
									alt=""
									className="w-full rounded-2xl"
								/>
							</div>
						</div>
						<div className="w-full px-3 sm:px-4 xl:w-1/2">
							<div className="relative z-10 my-4">
								<img
									src={ProjectThree}
									alt=""
									className="w-full rounded-2xl"
								/>
								<Dots />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutDevelopment;
