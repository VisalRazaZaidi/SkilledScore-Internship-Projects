import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./components/Search";

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/search" element={<Search />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
				<Route path="/update-post/:postId" element={<UpdatePost />} />
				<Route path="/create-post" element={<CreatePost />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/post/:postSlug" element={<PostPage />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}
