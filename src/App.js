import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Articles from "./pages/articles.jsx";
import ReadArticle from "./pages/readArticle.jsx";
import Contact from "./pages/contact.jsx";
import Notfound from "./pages/404.jsx";

import { TRACKING_ID } from "./data/tracking.js";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
