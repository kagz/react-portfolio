/* eslint-disable max-len */
import self from '../img/mimi.jpg';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';

export const colors = ['#0e0e0f', '#3e2167'];
export const info = {
	firstName: 'Andrew',
	lastName: 'Kagwi',
	initials: 'Andy',
	position: 'A Frontend Developer',
	selfPortrait: self,
	gradient: `-webkit-linear-gradient(107deg, ${colors})`,
	baseColor: colors[0],
	nameColor: "yellow",
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
	bio: 'My name is Andrew Kagwi , a passionate frontend web developer. Specializes in the development of highly interactive web applications using React and similar tools.',
	skills:
	{
		proficientWith: ['react', 'javascript', 'webpack', 'git', 'github', 'bootstrap', 'html5', 'css3'],
		exposedTo: ['nodejs', 'express'],
	},
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
					icon: 'https://img.icons8.com/color/48/000000/bootstrap.png',
					name: 'bootstrap',
				},
				{
					icon: 'https://img.icons8.com/plasticine/100/000000/react.png',
					name: 'react js',
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
				// {
				// 	icon: '',
				// 	name: 'supabase',
				// },

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
			stacks: ['react', 'styled components', 'REST Api'],
			image: mock2,
		},
		{
			title: 'Cloth online shop',
			live: 'https://newlookmtaani.web.app/shop',
			source: 'https://github.com/kagz/Newlooks-Mtaani-fe',
			description: 'Homecare web', // add desc
			stacks: ['react', 'scss', 'material design', 'REST Api'],
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
			stacks: ['react', 'bootstrap', 'cytoscape', 'REST Api'],
			image: mock5,
		},
	],
};
