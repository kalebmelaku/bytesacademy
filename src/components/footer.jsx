import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
	useEffect(() => {
		const date = new Date();
		document.getElementById("date").innerText = date.getFullYear();
	});
	return (
		<footer className="py-2 bg-primary text-black mt-8">
			<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
				<div className="grid justify-center  lg:justify-between">
					<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
						<span className="md:text-lg">
							Copyright © <span id="date"></span> All Rights Reserved{" "}
						</span>
					</div>
					<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <Link className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 " to={'mailto:kalebmelaku97@gmail.com'}>
                        <MdEmail />
                        </Link>
                        <Link className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 " to={'https://wa.me/+251953565269'}>
                        <IoLogoWhatsapp />
                        </Link>
                        <Link className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 " to={'https://t.me/+251953565269'}>
                        <FaTelegram />
                        </Link>
                        <Link className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 " to={'https://instagram.com/kayo_jr'}>
                        <RiInstagramFill />
                        </Link>
                        <Link className="bg-white p-2 rounded-full md:text-2xl text-secondary hover:text-black transition-colors duration-300 " to={'tel:+251953565269'}>
                        <FaPhone />
                        </Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
