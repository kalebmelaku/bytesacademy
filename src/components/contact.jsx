import React from "react";
import { FaPhone, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Contact() {
	return (
		<section className="text-gray-600 container md:mx-auto " id="contact">
			<p className="text-center text-4xl font-bold">Get In Touch With Us</p>
			<div className="flex flex-col md:items-center md:flex-row lg:max-w-7xl w-full px-5 py-6 md:py-12 mx-auto section ">
				<div className="md:w-1/3 w-full justify-center">
					<p className="leading-relaxed text-xl text-gray-900">
						We're here to assist you! If you have any questions or need
						assistance, please feel free to reach out to us.
						<br />
						<br />
						You can also email us at
						<br />
						<Link
							to={"mailto:bytesacademy@hotmail.com"}
							className="font-semibold border-b-4 border-primary"
						>
							bytesacademy@hotmail.com
						</Link>
					</p>
					<p className="leading-relaxed text-xl text-gray-900 mt-8">
						Connect with us on social media:
					</p>
					<div className="flex  pt-4 space-x-4 lg:pt-0 lg:col-end-13">
						<Link
							className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 "
							to={"mailto:kalebmelaku97@gmail.com"}
						>
							<MdEmail />
						</Link>
						<Link
							className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 "
							to={"https://wa.me/+251953565269"}
						>
							<IoLogoWhatsapp />
						</Link>
						<Link
							className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 "
							to={"https://t.me/+251953565269"}
						>
							<FaTelegram />
						</Link>
						<Link
							className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 "
							to={"https://instagram.com/kayo_jr"}
						>
							<RiInstagramFill />
						</Link>
						<Link
							className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 "
							to={"tel:+251953565269"}
						>
							<FaPhone />
						</Link>
					</div>
					{/* <span className="inline-flex mt-6 justify-center sm:justify-start">
						<a
							className="text-gray-500 hover:text-gray-900"
							target="_blank"
							href="https://twitter.com/example"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-6 h-6"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>
						<a
							className="ml-3 text-gray-500 hover:text-gray-900"
							href="https://www.instagram.com/example/"
							target="_blank"
						>
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-6 h-6"
								viewBox="0 0 24 24"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						</a>
					</span> */}
				</div>
				<div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
					<h1 className="text-xl text-gray-800 sm:text-xl font-bold title-font mb-4">
						Fill out this form
					</h1>
					<form
						action="send-contact.php"
						method="post"
						id="submit-contact-form"
					>
						<div className="p-2 w-full">
							<div className="relative">
								<label
									htmlFor="name"
									className="leading-7 py-4 text-lg text-gray-900"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required=""
									className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label
									htmlFor="email"
									className="leading-7 py-4 text-lg text-gray-900"
								>
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required=""
									className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label
									htmlFor="message"
									className="leading-7 py-4 text-lg text-gray-900"
								>
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									required=""
									className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
								></textarea>
							</div>
						</div>
						<div className="p-2 w-full">
							<button
								type="submit"
								className="flex text-black bg-primary border-0 py-3 px-4 focus:outline-none hover:bg-secondary rounded text-xl mx-0 flex-col text-center g-recaptcha"
							>
								Send Message ✉
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
