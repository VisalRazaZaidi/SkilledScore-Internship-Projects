import React from "react";
import CallToAction from "../components/CallToAction";

function Projects() {
	return (
		<div className="min-h-screen max-w-2xl mx-auto flex justify-center gap-6 items-center flex-col">
			<h1 className="text-3xl font-semibold">LifeStyle Blog Projects</h1>
			<p className="text-md text-gray-500">
				Explore ideas to enhance your lifestyle. Discover tips, inspiration, and guides on wellness, productivity, travel, and more!
			</p>
			<CallToAction />
		</div>
	);
}

export default Projects;
