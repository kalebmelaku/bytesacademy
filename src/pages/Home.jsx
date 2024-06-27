import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Sidebar from "../components/sidebar";

function Home() {
	return (
		<div className="py-3 md:h-screen font-montserrat container md:mx-auto overflow-x-hidden">
			<Navbar />
			<Sidebar />
			<Hero />
		</div>
	);
}

export default Home;
