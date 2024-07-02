import React, { useState } from "react";
import Navbar from "../components/navbar";
import logo from "../../src/assets/logo.png";
import Lottie from "lottie-react";
import axios from "axios";
import Code from "../Code.json";
import { useForm } from "react-hook-form";
function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [regStatus, setRegStatus] = useState(false)
	const onSubmit = async (data) => {
		try {
			const response = await axios.post("http://localhost:5000/register", data);
			if (response.status === 200) {
				setRegStatus(true)
			} else {
				setRegStatus(false)
			}
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<>
			<Navbar />
			<div class="text-gray-900 flex justify-center rounded-lg">
				<div className="mb-10 font-montserrat container md:mx-auto rounded-lg">
					<div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 ">
						<div class="w-full p-6 sm:px-12">
							<div>
								<img src={logo} class="w-mx-auto" />
							</div>
							<div class="mt-12 flex flex-col items-center">
								<div class="w-full flex-1 mt-8">
									<form onSubmit={handleSubmit(onSubmit)}>
										<div class="mx-auto">
											<div className="flex flex-col md:flex-row items-center justify-between gap-x-4">
												<input
													required
													class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
													type="text"
													id="fname"
													{...register("fname", { required: true })}
													placeholder="First Name"
												/>
												<input
													required
													class="mt-5 md:mt-0 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
													type="text"
													id="lname"
													{...register("lname", { required: true })}
													placeholder="Last Name"
												/>
											</div>
											<div className="flex flex-col md:flex-row items-center justify-between gap-x-4 mt-5">
												<input
													required
													class=" w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
													type="email"
													id="email"
													{...register("email", { required: true })}
													placeholder="Email"
												/>
												<input
													required
													class="mt-5 md:mt-0 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
													type="tel"
													id="phone"
													{...register("phone", { required: true })}
													placeholder="Phone Number"
												/>
											</div>
											<div className="flex items-center justify-between gap-x-4 mt-5">
												<select
													class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
													required
													id="course"
													{...register("course", { required: true })}
												>
													<option value={""} disabled selected>
														Select a course
													</option>
													<option value="html">HTML AND CSS</option>
													<option value="javascript">JAVASCRIPT</option>
													<option value="react">REACT</option>
												</select>
											</div>
											<div className="flex items-center justify-between gap-x-4 mt-5">
												<select
													class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
													id="education"
													{...register("education", { required: true })}
													required
												>
													<option value={""} disabled selected>
														Level of Education
													</option>
													<option value="highschool">Highschool</option>
													<option value="university">University</option>
												</select>
											</div>
											<p class="mt-6 text-xs text-gray-600 text-center">
												I agree to abide by Bytes Academy Terms of Service and
												its Privacy Policy
											</p>
											<p class="mt-6 text-xs text-gray-600 text-center">
												I agree to receive updates and course offers through my
												email address.
											</p>
											<button
												class="mt-5 tracking-wide font-semibold bg-primary text-white-500 w-full py-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
												type="submit"
											>
												<span class="ml-">Register</span>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="w-3/4 bg-primary text-center items-center justify-center hidden md:flex">
							<Lottie animationData={Code} loop={true} />;
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
