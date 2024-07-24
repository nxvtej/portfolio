/** @format */

import styles from "./HeroStyles.module.css";
import profile from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
	const { theme, toggleTheme } = useTheme();

	const themeIcon = theme === "light" ? sun : moon;
	const twitterIcon = theme === "light" ? twitterLight : twitterDark;
	const githubIcon = theme === "light" ? githubLight : githubDark;
	const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

	return (
		<section id='hero' className={styles.container}>
			<div className={styles.colorModeContainer}>
				<img
					src={profile}
					className={styles.hero}
					alt='Profile picture of Navdeep Singh'
				/>
				<img
					className={styles.colorMode}
					src={themeIcon}
					alt='Color mode icon'
					onClick={toggleTheme}
				/>
			</div>
			<div className={styles.info}>
				<h1>
					Navdeep
					<br />
					Singh
				</h1>
				<h2>Software Engineer</h2>
				<span>
					<a href='https://twitter.com/nxvdeeep' target='_blank'>
						<img src={twitterIcon} alt='Twitter icon' />
					</a>
					<a href='https://github.com/nxvtej' target='_blank'>
						<img src={githubIcon} alt='Github icon' />
					</a>
					<a
						href='https://www.linkedin.com/in/navdeep-singh-62883821a/'
						target='_blank'>
						<img src={linkedinIcon} alt='Linkedin icon' />
					</a>
				</span>
				<p className={styles.description}>
					B.E in CSE, looking forward to work for an organizationleveraging my
					abilities and knowledge in software development.
				</p>
				<a href={CV} download>
					<button className='hover'>Resume</button>
				</a>
			</div>
		</section>
	);
}

export default Hero;
