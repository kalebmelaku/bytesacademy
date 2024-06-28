import React, {useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { SidebarContext } from "../context/sidebarContext";

function Navbar() {
	const location = useLocation();
	const [isActive, setIsActive] = useState(false);
	const currLocation = location.hash.substring(1, location.hash.length);
	let about,
		courses,
		services,
		contact,
		home = "";
	switch (currLocation) {
		case "about":
			about = "underline underline-offset-8";
			break;
		case "courses":
			courses = "underline underline-offset-8";
			break;
		case "services":
			services = "underline underline-offset-8";
			break;
		case "contact":
			contact = "underline underline-offset-8";
			break;
		default:
			home = "underline underline-offset-8";
			break;
	}
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		});
	});

	return (
		<div className={`${isActive ? "sticky top-0 left-0 bg-white z-50 shadow-lg" : "sticky top-0 left-0 bg-white z-50"}`}>
			{/* navbar */}
			<div className="flex items-center justify-between py-3 mx-2 md:mx-auto container">
				<img className="w-48" src={Logo} alt="" />

				<ul className="hidden lg:flex items-center space-x-5 text-black">
					<li className={home}>
						<a
							className="hover:underline hover:underline-offset-4"
							href={"/#home"}
						>
							Home
						</a>
					</li>
					<li className={about}>
						<a
							className="hover:underline hover:underline-offset-4"
							href={"/#about"}
						>
							About Us
						</a>
					</li>
					<li className={courses}>
						<a
							className="hover:underline hover:underline-offset-4"
							href={"/#courses"}
						>
							Courses
						</a>
					</li>
					<li className={services}>
						<a
							className="hover:underline hover:underline-offset-4"
							href={"/#services"}
						>
							Services
						</a>
					</li>
					<li className={contact}>
						<a
							className="hover:underline hover:underline-offset-4"
							href={"/#contact"}
						>
							Contact
						</a>
					</li>
				</ul>
				<Link
					className="bg-secondary md:bg-primary rounded-md px-4 md:px-7 py-2 hover:bg-primary md:hover:secondary  hover:text-white transition-colors duration-300 lg:flex items-center justify-around"
					to={"/register"}
				>
					<FaGraduationCap className="text-2xl mr-4 hidden md:block" />
					Register
				</Link>

				{/* hamburger menu */}
				{/* <button
	className="space-y-1 group lg:hidden"
	onClick={() => setIsOpen(!isOpen)}
>
	<div className="w-6 h-1 bg-black"></div>
	<div className="w-3 h-1 bg-black ml-auto"></div>
	<div className="w-6 h-1 bg-black"></div>
</button> */}
				{/* menu */}
				{/* <ul className="bg-primary w-screen h-screen absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-evenly">
		<button className="px-10 py-8 relative ml-auto">
			<div className="w-6 h-1 rotate-45 absolute bg-white"></div>
			<div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
		</button>
		<li>
			<Link
				className="text-xl my-2 hover:underline hover:underline-offset-4"
				to={"/"}
			>
				Home
			</Link>
		</li>
		<li>
			<Link
				className="text-xl my-2 hover:underline hover:underline-offset-4"
				to={"/#about"}
			>
				About Us
			</Link>
		</li>
		<li>
			<Link
				className="text-xl my-2 hover:underline hover:underline-offset-4"
				to={"/#courses"}
			>
				Course
			</Link>
		</li>
		<li>
			<Link
				className="text-xl my-2 hover:underline hover:underline-offset-4"
				to={"/#services"}
			>
				Services
			</Link>
		</li>
		<li>
			<Link
				className="text-xl my-2 hover:underline hover:underline-offset-4"
				to={"/#contact"}
			>
				Contact
			</Link>
		</li>
	</ul> */}
			</div>
		</div>
	);
}

export default Navbar;
