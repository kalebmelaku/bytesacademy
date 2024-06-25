import React, { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import logo from "../assets/logo.png";

function Sidebar() {
	// const { isOpen, handleClose } = useContext(SidebarContext);
	const { isOpen, handleClose } = useContext(SidebarContext);
	return (
		<div
			className={`${
				isOpen ? "right-0" : "-right-full"
			} w-full bg-white h-full fixed top-0 shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
		>
			<div className="flex items-center justify-between py-6 border-b">
				<div className="uppercase text-sm font-semibold">
					<img className="w-1/2" src={logo} alt="" />
				</div>
				<div
					onClick={handleClose}
					className="cursor-pointer w-8 h-8 flex justify-center items-center"
				>
					<button className="px-10 py-8 relative ml-auto">
						<div className="w-6 h-1 rotate-45 absolute bg-black"></div>
						<div className="w-6 h-1 -rotate-45 absolute bg-black"></div>
					</button>
				</div>
			</div>

			{/* <div className="bg-gray-200 mt-2 flex p-4 justify-center items-center text-primary w-full font-medium cursor-pointer rounded-md hover:bg-gray-400 transition-all duration-200">
				<Link to={"/checkout"}>Place Order</Link>
			</div> */}
		</div>
	);
}

export default Sidebar;
