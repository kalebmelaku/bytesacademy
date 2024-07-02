// components/RegisterForm.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import ConfirmReg from "../modal/confirmReg";
import TextInput from "./subComponents/textInput";
import SelectInput from "./subComponents/selectInput";

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [regStatus, setRegStatus] = useState("");
	const [message, setMessage] = useState("");
	const [response, setResponse] = useState(0);
	const [send, setSend] = useState(true);

	const onSubmit = async (data) => {
		try {
			const response = await axios.post("http://localhost:5000/register", data);
			if (response.status === 200) {
				setMessage("Successfully registered");
				setRegStatus("true");
				setResponse(200);
			}
		} catch (err) {
			if (err.response && err.response.status === 400) {
				setMessage("Email already registered.");
				setRegStatus("false");
				setResponse(400);
			} else {
				alert("An error occurred while registering. Please try again.");
			}
			console.log(err);
		}
	};

	return (
		<>
			{regStatus.length > 0 && (
				<div id="regStatus" className="w-full">
					<ConfirmReg error={message} status={response} />
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mx-auto">
					<div className="flex flex-col md:flex-row items-center justify-between gap-x-4">
						<TextInput
							id="fname"
							placeholder="First Name"
							register={register}
						/>
						<TextInput id="lname" placeholder="Last Name" register={register} />
					</div>
					<div className="flex flex-col md:flex-row items-center justify-between gap-x-4 mt-5">
						<TextInput
							id="email"
							placeholder="Email"
							register={register}
							type="email"
						/>
						<TextInput
							id="phone"
							placeholder="Phone Number"
							register={register}
							type="tel"
						/>
					</div>
					<div className="flex items-center justify-between gap-x-4 mt-5">
						<SelectInput
							id="course"
							placeholder="Select a course"
							options={[
								{ value: "html and css", label: "HTML AND CSS" },
								{ value: "javascript", label: "JAVASCRIPT" },
								{ value: "react", label: "REACT" },
							]}
							register={register}
						/>
					</div>
					<div className="flex items-center justify-between gap-x-4 mt-5">
						<SelectInput
							id="education"
							placeholder="Level of Education"
							options={[
								{ value: "highschool", label: "Highschool" },
								{ value: "university", label: "University" },
							]}
							register={register}
						/>
					</div>
					<p className="mt-6 text-xs text-gray-600 text-center">
						I agree to abide by Bytes Academy Terms of Service and its Privacy
						Policy
					</p>
					<p className="mt-6 text-xs text-gray-600 text-center">
						I agree to receive updates and course offers through my email
						address.
					</p>
					<button
						className="mt-5 tracking-wide font-semibold bg-primary text-white-500 w-full py-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
						type="submit"
					>
						<span className="ml-">Register</span>
					</button>
				</div>
			</form>
		</>
	);
};

export default RegisterForm;
