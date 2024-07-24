/** @format */

import styles from "./ProjectsStyles.module.css";
import hacker from "../../assets/hacker.jpeg";
import encryptor from "../../assets/encryptor.jpeg";
import chatstrom from "../../assets/chatstrom.jpeg";
import resumeBuilder from "../../assets/resumeBuilder.jpeg";
import fitness from "../../assets/fitness.jpeg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
	return (
		<section id='projects' className={styles.container}>
			<h1 className='sectionTitle'>Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={hacker}
					link='https://github.com/nxvtej/nta-scraper'
					h3='Scraper'
					p='Script to scrape NEET Result'
				/>
				<ProjectCard
					src={resumeBuilder}
					link='https://github.com/nxvtej/resume-app'
					h3='Resume Builder'
					p='Ai powered Resume builder'
				/>
				<ProjectCard
					src={encryptor}
					link='https://github.com/nxvtej/file-en-decryptor'
					h3='Encryptor'
					p='File En-Decryptor'
				/>
				<ProjectCard
					src={chatstrom}
					link='https://chatstorm-ovnx.onrender.com/login'
					h3='Chat Strom'
					p='Chatting Webstie'
				/>
				<ProjectCard
					src={fitness}
					link='https://github.com/nxvtej/noob-fitness/tree/main/fitness%20website'
					h3='FitLift'
					p='Fitness Website'
				/>
			</div>
		</section>
	);
}

export default Projects;
