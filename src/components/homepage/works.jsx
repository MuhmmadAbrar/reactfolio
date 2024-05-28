import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./niyata.png"
								alt="niyata"
								className="work-image"
							/>
							<div className="work-title">AI Intern</div>
							<div className="work-subtitle">
								Niyata Infotech
							</div>
							<div className="work-duration">October 2023 - January 2024</div>
						</div>

						<div className="work">
							<img
								src="./icover.png"
								alt="icover"
								className="work-image"
							/>
							<div className="work-title">Frontend Intern</div>
							<div className="work-subtitle">
								iCover Insure
							</div>
							<div className="work-duration">February 2022 - August 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
