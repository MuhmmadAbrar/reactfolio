import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import Skills from "../components/about/skills";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";


const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

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
								<div className="subtitle about-subtitle">
									<div className="table-container">
										<table>
											<tr>
												<th>Languages</th>
												<td>Python, Java, C++, C</td>
											</tr>
											<tr>
												<th>Backend Web Development</th>
												<td>Node.js, Express.js, Flask</td>
											</tr>
											<tr>
												<th>Frontend Web Development</th>
												<td>React, TailwindCSS, HTML, CSS, Bootstrap</td>
											</tr>
											<tr>
												<th>Databases</th>
												<td>MySQL, PostgreSQL, MongoDB, SQLAlchemy</td>
											</tr>
											<tr>
												<th>Web Technologies</th>
												<td>Streamlit, Firebase</td>
											</tr>
											<tr>
												<th>Android Development</th>
												<td>Kotlin, Dart, Flutter</td>
											</tr>
											<tr>
												<th>Developer Tools</th>
												<td>VS Code, GitHub</td>
											</tr>
											<tr>
												<th>Relevant Python Frameworks and Libraries</th>
												<td>Numpy, Pandas, Matplotlib, Seaborn, Canva, TensorFlow, Keras, MySQL, Scikit-Learn, NLTK, OpenCV</td>
											</tr>
											<tr>
												<th>Tools</th>
												<td>MATLAB, Keil, STM32CubeIDE, Arduino, MS Office Tools</td>
											</tr>
										</table>
</div>
								</div>



							</div>

							<div className="about-left-side">

								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
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
