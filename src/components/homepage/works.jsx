import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{/* <div className="work">
							<img
								src="./microsoft.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Microsoft</div>
							<div className="work-subtitle">
								Web devloper
							</div>
							<div className="work-duration">2023 - Present</div>
						</div> */}

						<div className="work">
							<img
								src="./fiverr.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Freelancer</div>
							<div className="work-subtitle">
								Web designer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
