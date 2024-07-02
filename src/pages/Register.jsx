// Register.js
import React from "react";
import Navbar from "../components/navbar";
import logo from "../../src/assets/logo.png";
import Lottie from "lottie-react";
import Code from "../Code.json";
import RegisterForm from "../components/registerForm";

function Register() {
	return (
		<>
			<div className="relative">
				<Navbar />
				<div className="text-gray-900 flex justify-center rounded-lg">
					<div className="mb-10 font-montserrat container md:mx-auto rounded-lg">
						<div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 ">
							<div className="w-full p-6 sm:px-12">
								<div>
									<img src={logo} className="w-mx-auto" />
								</div>
								<div className="flex flex-col items-center">
									<div className="w-full flex-1 mt-8">
										<RegisterForm />
									</div>
								</div>
							</div>
							<div className="w-3/4 bg-primary text-center items-center justify-center hidden md:flex">
								<Lottie animationData={Code} loop={true} />;
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
