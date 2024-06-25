import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Sidebar from "../components/sidebar";

function Home() {
	return (
		<div className="w-full py-3 px-15 lg:px-32 mx-auto md:h-screen font-montserrat">
			<Navbar />
			<Sidebar />
			<Hero />
		</div>
	);
}

export default Home;
