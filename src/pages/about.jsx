import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import BotChat from "../components/BotBox/BotBox";

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
	
			// Adding Marker
			const marker = new window.google.maps.Marker({
				position: { lat: 21.151953335774625, lng: 81.35217122544434 },
				map: map,
				icon: {
					url: "https://i.ibb.co/XJfr75s/transparent-image.png", // Replace with your image URL
					scaledSize: new window.google.maps.Size(30, 30), // Custom size (width, height)
				},				 
				title: "Pratyush Webworks",
			});
	
			// Adding Info Window
			const infoWindow = new window.google.maps.InfoWindow({
				content: `<div style="font-size:14px; text-align:center;">
							<p style="font-weight:bold;">Pratyush Webworks<p/>5922+QW2, Shiv Para, Railway Colony, Bhilai, Chhattisgarh 491001
						  </div>`,
			});
	
			// Open the info window **above the marker**
			infoWindow.open(map, marker);
		};
	
		if (window.google && window.google.maps) {
			initMap();
		} else {
			const script = document.createElement("script");
			script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCTatOasJyifDhQ4IMA_7UO0Dnkvd5fUEY`; // Replace YOUR_API_KEY with your actual API key
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
			<BotChat />
		</React.Fragment>
	);
};

export default About;
