import React, { useEffect, useState } from "react";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

function Home() {
	const [posts, setPosts] = useState([]);
	const [showMore, setShowmore] = useState(true);
	useEffect(() => {
		const fetchPosts = async () => {
			const startIndex = posts.length;
			try {
				const res = await fetch(`/api/post/getposts?startIndex=${startIndex}`);
				const data = await res.json();
				if (res.ok) {
					setPosts([...data.posts, ...posts]);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchPosts();
	}, []);

	const handleShowMore = async () => {
		const startIndex = posts.length;
		try {
			const res = await fetch(`/api/post/getposts?startIndex=${startIndex}`);
			const data = await res.json();
			if (res.ok) {
				setPosts([...posts, ...data.posts]);

				if (data.posts.length < 9) {
					setShowmore(false);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="px-4">
			<div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
				<h1 className="font-bold text-3xl lg:text-6xl"> Welcome to LifeVibe — Where Passion Meets Everyday Inspiration</h1>
				<div className="text-gray-500 text-xs sm:text-sm">
					At LifeVibe, we explore the vibrant rhythm of modern living — from wellness and creativity to tech, travel, and personal growth. Our goal is to inspire, empower, and celebrate the little moments that shape our everyday lives. Whether you're chasing goals or just vibing through life, there's something here for you.
				</div>
				<a
					className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
					href="/search"
				>
					View all posts
				</a>
				<div className="p-3 bg-amber-100 dark:bg-slate-700">
					<CallToAction />
				</div>
			</div>
			<div>
				<h1 className="text-2xl font-semibold text-center mb-5">
					Recent Posts
				</h1>
				<div className="flex gap-4 flex-wrap">
					{posts &&
						posts.map((post) => {
							return <PostCard post={post} key={post._id} />;
						})}
				</div>
			</div>
			<div>
				{showMore && (
					<button
						onClick={handleShowMore}
						className="w-full text-teal-500 self-center text-sm py-7"
					>
						Show more
					</button>
				)}
			</div>
		</div>
	);
}

export default Home;
