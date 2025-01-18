import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	useEffect(() => {
		// Initialize Google Maps API
		const initMap = () => {
			const map = new window.google.maps.Map(
				document.getElementById("map"),
				{
					center: { lat: 21.151953335774625, lng: 81.35217122544434 }, // Centered on Pratyush Webworks
					zoom: 18, // Closer view to emphasize the location
					mapTypeId: "roadmap",
				}
			);
			console.log(`debug: ${map}`); // to fix unexpected error, 'map' is assigned a value but never used in the file src/pages/about.jsx
		};

		if (window.google && window.google.maps) {
			initMap();
		} else {
			const script = document.createElement("script");
			script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
			script.async = true;
			script.defer = true;
			script.onload = initMap;
			document.body.appendChild(script);
		}
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
				<script src="https://files.bpcontent.cloud/2024/11/13/13/20241113130426-YK6QCUIT.js"></script>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<div
											id="map"
											style={{
												width: "100%",
												height: "300px",
											}}
											className="about-map"
										></div>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
