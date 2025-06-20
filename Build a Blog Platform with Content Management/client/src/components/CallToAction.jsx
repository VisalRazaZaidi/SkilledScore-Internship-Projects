import { Button } from "flowbite-react";
import React from "react";
import portfolioImage from "../assets/banner.png"; 
import { Link } from "react-router-dom";

function CallToAction() {
	return (
		<>
			<div className="flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center">
				<div className="flex-1 p-7">
					<img src={portfolioImage} />
				</div>
				<div className="flex-1 justify-center flex flex-col gap-5">
					<h2 className="text-2xl">
						Discover our Lifestyle Magazine for the latest trends, wellness tips, and inspiration to elevate your everyday living.
					</h2>
					<Link to="../pages/PostPage.jsx" className="w-full">
						<Button className="w-full" gradientDuoTone="purpleToPink">
							Read the Magazine
						</Button>
					</Link>
				</div>
				
			</div>
		</>
	);
}

export default CallToAction;
