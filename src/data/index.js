/* eslint-disable max-len */
import self from '../img/kagz.png';
import spruce from '../img/spruce.png';
import dapps from '../img/dapps.png';
import michezo from '../img/michezo.png';
import mitumba from '../img/mitumba.png';
import me from '../img/me.png';
import Ponder from '../img/Ponder.png';

export const colors = ['#0e0e0f', '#3e2167'];
export const info = {
	firstName: 'Andrew',
	lastName: 'Kagwi',
	initials: 'Andy',
	position: 'A Frontend Developer',
	selfPortrait: self,
	gradient: `-webkit-linear-gradient(107deg, ${colors})`,
	baseColor: colors[0],
	nameColor: 'yellow',
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
			link: 'https://www.linkedin.com/in/andrewkagwi/',
			icon: 'FaLinkedin',
			label: 'linkedin',
		},
		{
			link: 'https://twitter.com/kagwidru',
			icon: 'FaTwitter',
			label: 'twitter',
		},

	],
	bio: 'My name is Andrew Kagwi , a passionate frontend web developer. Specializes in the development of highly interactive web applications using React and similar tools.',
	hobbies: [
		{
			label: 'football',
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
			label: 'Frontend ',
			stacks: [

				{
					icon: 'https://img.icons8.com/plasticine/100/000000/react.png',
					name: 'react js',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/bootstrap.png',
					name: 'bootstrap',
				},
				{
					icon: 'https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/000000/external-nuxt-js-a-free-and-open-source-web-application-framework-logo-green-tal-revivo.png',
					name: 'nextjs',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
					name: 'html',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/css3.png',
					name: 'css',
				},

			],
			emoji: 'FaGlobeAfrica',
		},
		{
			label: 'Backend ',
			stacks: [
				{
					icon: 'https://img.icons8.com/fluency/48/000000/node-js.png',
					name: 'nodejs',
				},
				{
					icon: 'https://img.icons8.com/fluency/48/000000/express-js.png',
					name: 'express',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/google-firebase-console.png',
					name: 'firebase ',
				},
			],
			emoji: 'FaServer',
		},
		{
			label: 'databases',
			stacks: [
				{
					icon: 'https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-MySQL-programming-and-development-those-icons-flat-those-icons.png',
					name: 'mysql',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/postgreesql.png',
					name: 'postgres',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/google-firebase-console.png',
					name: 'firebase',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
					name: 'mongodb',
				},
			],
			emoji: 'FaStackOverflow',
		},
		{
			label: 'workflows',
			stacks: [
				{
					icon: 'https://img.icons8.com/color/48/000000/git.png',
					name: 'git',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/trello.png',
					name: 'trello',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/jira.png',
					name: 'jira',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/slack-new.png',
					name: 'slack',
				},
			],
			emoji: 'FaMegaport',
		},
		{
			label: ' tools',
			stacks: [
				{
					icon: 'https://img.icons8.com/color/48/000000/webpack.png',
					name: 'webpack',
				},
				{
					icon: 'https://img.icons8.com/dusk/64/000000/babel.png',
					name: 'babel',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/eslint.png',
					name: 'eslint',
				},
				{
					icon: 'https://img.icons8.com/color/48/000000/npm.png',
					name: 'npm',
				},
				{
					icon: 'https://img.icons8.com/fluency/48/000000/docker.png',
					name: 'docker',
				},
			],
			emoji: 'FaTools',
		},
	],
	portfolio: [
		{
			title: 'Personal portfolio',
			live: 'https://www.awesomescreenshot.com/image/33898992?init_open=true',
			source: 'https://github.com/kagz/react-portfolio',
			description: 'Personal web app to showcase my coding skills and experience.', // add desc
			stacks: ['react', 'bootstrap', 'webpack', 'styled components'],
			image: me,
		},
		{
			title: 'Decent Apps UI',
			live: 'https://www.awesomescreenshot.com/image/33898290',
			source: 'https://github.com/kagz/ponder/tree/development',
			description: 'Company profile ui for a client. ', // add desc
			stacks: ['nextjs', 'material ui', 'webpack'],
			image: dapps,
		},
		{
			title: 'Ponders App',
			live: 'https://www.awesomescreenshot.com/image/33897445',
			source: 'https://github.com/decentrists/Ponder',
			description: 'Web3 based podcast discovery app , used arweave. users could search their favourite podcasts in one place and interract with like-minded people.', // add desc
			stacks: ['react', 'bootstrap', 'cytoscape', 'styled components', 'arweave'],
			image: Ponder,
		},
		{
			title: 'Michezo App',
			live: 'https://www.awesomescreenshot.com/image/33898805',
			source: 'https://github.com/kagz/michezo-frontend',
			description: 'Web  app for tournaments management,users can register their teams and manage their tournaments.', // add desc
			stacks: ['react', 'styled components', 'webpack'],
			image: michezo,
		},
		{
			title: 'Homecare web',
			live: 'https://kagz.github.io/Spruce/',
			source: 'https://github.com/kagz/spruce-ultimate',
			description: 'Clients portfolio for a health care center.', // add desc
			stacks: ['HTML', 'scss', 'js'],
			image: spruce,
		},
		{
			title: 'ecommerce shop',
			live: 'https://newlookmtaani.web.app/shop',
			source: 'https://github.com/kagz/Newlooks-Mtaani-fe',
			description: 'Clients frontend e-commerce site for second hand clothes.', // add desc
			stacks: ['Html', 'scss', 'material design'],
			image: mitumba,
		},

	],
};
