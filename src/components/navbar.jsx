import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/sidebarContext";

function Navbar() {
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	return (
		<div className="flex items-center justify-between py-3 mx-4">
			{/* navbar */}
			<img className="w-48" src={Logo} alt="" />

			<ul className="hidden lg:flex items-center space-x-5 text-black">
				<li>
					<Link className="hover:underline hover:underline-offset-4" to={"/"}>
						Home
					</Link>
				</li>
				<li>
					<Link
						className="hover:underline hover:underline-offset-4"
						to={"/#about"}
					>
						About Us
					</Link>
				</li>
				<li>
					<Link
						className="hover:underline hover:underline-offset-4"
						to={"/#courses"}
					>
						Course
					</Link>
				</li>
				<li>
					<Link
						className="hover:underline hover:underline-offset-4"
						to={"/#services"}
					>
						Services
					</Link>
				</li>
				<li>
					<Link
						className="hover:underline hover:underline-offset-4"
						to={"/#contact"}
					>
						Contact
					</Link>
				</li>
			</ul>
			<Link
				className="bg-primary rounded-md px-7 py-2 hover:bg-secondary hover:text-white transition-colors duration-300 hidden lg:block"
				to={"/#contact"}
			>
				Contact
			</Link>

			{/* hamburger menu */}
			<button
				className="space-y-1 group lg:hidden"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="w-6 h-1 bg-black"></div>
				<div className="w-3 h-1 bg-black ml-auto"></div>
				<div className="w-6 h-1 bg-black"></div>
			</button>
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
	);
}

export default Navbar;
