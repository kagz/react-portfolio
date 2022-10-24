/* eslint-disable max-len */
import self from '../img/mimi.jpg';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';

export const colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];

export const info = {
	firstName: 'Andrew',
	lastName: 'Kagwi',
	initials: 'AK',
	position: 'A Frontend Developer',
	selfPortrait: self,
	gradient: `-webkit-linear-gradient(135deg, ${colors})`,
	baseColor: colors[0],
	miniBio: [
		{
			emoji: '🌎',
			text: 'Based in Kenya',
		},
		{
			emoji: '💼',
			text: 'A Freelancer ',
		},
		{
			emoji: '🧠',
			text: '3+ years ',
		},
		{
			emoji: '📧',
			text: 'kagwiandrew@gmail.com',
		},
	],
	socials: [
		{
			link: 'https://github.com/kagz',
			icon: 'FaGithub',
			label: 'github',
		},
		{
			link: 'https://linkedin.com/andrew-kagwi',
			icon: 'FaLinkedin',
			label: 'linkedin',
		},
		{
			link: 'https://twitter.com/kagwidru',
			icon: 'FaTwitter',
			label: 'twitter',
		},

	],
	bio: 'My name is Kagwi Andrew, a passionate frontend web developer.Specializes in the development of highly interactive web applications using React and similar tools.',
	skills:
	{
		proficientWith: ['react', 'javascript', 'webpack', 'git', 'github', 'bootstrap', 'html5', 'css3'],
		exposedTo: ['nodejs', 'express'],
	},
	hobbies: [
		{
			label: 'playing football',
			emoji: '⚽',
		},
		{
			label: 'editing',
			emoji: '🎥',
		},
		{
			label: 'music',
			emoji: '🎶',
		},

	],
	techStacks: [
		{
			label: 'Front End Technologies',
			stacks: ['react js', 'nextjs', 'html', 'css', 'bootstrap'],
			emoji: 'FaGlobeAfrica',
		},
		{
			label: 'Back-End Technologies',
			stacks: ['nodejs', 'express', 'firebase', 'supabase'],
			emoji: 'FaServer',
		},
		{
			label: 'databases and hosting',
			stacks: ['mysql', 'postgres', 'firebase', 'heroku'],
			emoji: 'FaStackOverflow',
		},
		{
			label: 'workflows and teams',
			stacks: ['git', 'trello', 'jira', 'slack'],
			emoji: 'FaMegaport',
		},
		{
			label: 'other build tools',
			stacks: ['webpack', 'babel', 'eslint'],
			emoji: 'FaTools',
		},
	],
	portfolio: [
		{
			title: 'Homecare web',
			live: 'https://kagz.github.io/Spruce/',
			source: 'https://github.com/kagz/spruce-ultimate',
			description: 'Homecare web', // add desc
			stacks: ['HTML', 'scss'],
			image: mock1,
		},
		{
			title: 'React Jobs App',
			live: 'https://github.com/kagz/github-jobs-react-app',
			source: 'https://github.com/kagz/github-jobs-react-app',
			description: 'Homecare web', // add desc
			stacks: ['react', 'styled components', 'RESTful Api'],
			image: mock2,
		},
		{
			title: 'Cloth online shop',
			live: 'https://newlookmtaani.web.app/shop',
			source: 'https://github.com/kagz/Newlooks-Mtaani-fe',
			description: 'Homecare web', // add desc
			stacks: ['react', 'scss', 'material design', 'RESTful Api'],
			image: mock3,
		},
		{
			title: 'Decent Apps UI',
			live: 'https://decentapps.eu/roadmap',
			source: 'https://github.com/kagz/ponder/tree/development',
			description: 'Homecare web', // add desc
			stacks: ['nextjs'],
			image: mock4,
		},
		{
			title: 'Ponders App',
			live: 'https://github.com/decentrists',
			source: 'https://github.com/decentrists/Ponder',
			description: 'Homecare web', // add desc
			stacks: ['react', 'bootstrap', 'cytoscape', 'RESTful Api'],
			image: mock5,
		},
	],
};
