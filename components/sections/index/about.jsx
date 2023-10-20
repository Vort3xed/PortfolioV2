// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I am a student at Poolesville High School in the SMCS magnet program. I enjoy computer programming and cybersecurity."
				/>
				<section className={about.content}>
					<div className={about.image}>
						
						<BadgesBlock 
							title="Web Development Skills" 
							containerClass={about.container}
							list={webdevskills} 
							fullContainer="fullContainer"
							block="methods" 
							icon="code"
							copy=""
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
					<div className={about.copy} >
						<BadgesBlock 
							title="Cybersecurity Skills" 
							containerClass={about.container}
							list={cyberskills} 
							fullContainer="fullContainer"
							block="methods" 
							icon="terminal"
							copy=""
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
						<BadgesBlock 
							title="Programming Languages" 
							containerClass={about.container}
							list={languages} 
							fullContainer="fullContainer"
							block="methods" 
							icon="laptop-code"
							copy=""
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const languages	= [
	{ key: 'coffee-beans', 		name: 'Java', 		type: 'fad' },
	{ key: 'code', 				name: 'Javascript', 	type: 'fad' },
	{ key: 'snake', 			name: 'Python', 	type: 'fad' },
	{ key: 'cubes', 			name: 'PostgreSQL', 	type: 'far' },
	{ key: 'cubes', 			name: 'MySQL', 	type: 'fad' },
	{ key: 'file-code', 		name: 'CSS', 		type: 'fad' },
	{ key: 'brain', 			name: 'Machine Learning', 		type: 'fad' }
]

const webdevskills = [
	{ key: 'rectangle-code', 		name: 'React.js', 		type: 'fad' },
	{ key: 'rectangle-code', 		name: 'Next.js', 	type: 'fad' },
	{ key: 'code-merge', 			name: 'Git', 	type: 'fad' },
	{ key: 'file-code', 			name: 'Tailwind CSS', 	type: 'far' },
	{ key: 'code', 					name: 'HTML', 	type: 'fad' },
	{ key: 'file-code', 			name: 'Bootstrap CSS', 		type: 'fad' },
	{ key: 'gear', 					name: 'Heroku', 		type: 'fad' }
]

const cyberskills = [
	{ key: 'server', 				name: 'Linux', 		type: 'fad' },
	{ key: 'syringe', 				name: 'Website Penetration', 	type: 'fad' },
	{ key: 'lock', 					name: 'Cryptography', 	type: 'fad' },
	{ key: 'magnifying-glass', 		name: 'Forensics', 	type: 'far' },
	{ key: 'wifi-slash', 			name: 'Network Penetration', 	type: 'fad' },
	{ key: 'horse-saddle', 			name: 'Trojan Engineering', 		type: 'fad' },
	{ key: 'router', 				name: 'Able to Configure Cisco Devices', 		type: 'fad' }
]