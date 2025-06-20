import React from "react";

function About() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="max-w-2xl mx-auto p-3 text-center">
				<div>
					<h1 className="text-3xl font-semibold  text-center my-7 ">
						About <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md">LiveVibe's</span>Blog
					</h1>
					<div className="text-md text-gray-500 flex flex-col gap-6">
						<p>
							LifeVibe is a passion-driven lifestyle magazine curated by a team of creative minds who believe in the art of mindful, stylish, and balanced living. From wellness and personal growth to fashion, travel, relationships, and everyday hacks — we cover everything that makes life vibrant and fulfilling.
						</p>
						<p>
							Here, you'll discover fresh weekly reads, thoughtful insights, and real-life stories that resonate with the modern soul. Whether you're looking for motivation, trend updates, or a moment of calm, LifeVibe is your space to pause, reflect, and reconnect.
						</p>
						<p>
							We invite you to join the conversation — leave comments, share your thoughts, and engage with our growing community. Because at LifeVibe, it's not just about reading — it's about living the vibe.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
