import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import Courses from "../components/courses";
import Services from "../components/services";
import Contact from "../components/contact";
function Home() {
	return (
		<>
			<div className="py-3 font-montserrat container md:mx-auto">
				<Navbar />
				<Hero />
				<AboutUs />
				<Courses />
				<Services />
				<Contact />
			</div>
		</>
	);
}

export default Home;
