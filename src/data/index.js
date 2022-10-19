/* eslint-disable max-len */
import self from '../img/self.jpg';
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
	position: 'a Frontend Developer',
	selfPortrait: self,
	gradient: `-webkit-linear-gradient(135deg, ${colors})`,
	baseColor: colors[0],
	miniBio: [
		{
			emoji: '🌎',
			text: 'based in kenya',
		},
		{
			emoji: '💼',
			text: 'freelance ',
		},
		{
			emoji: '📧',
			text: 'kagwiandrew@gmail.com',
		},
	],
	socials: [
		{
			link: 'https://github.com/kagz',
			icon: 'fa fa-github',
			label: 'github',
		},
		{
			link: 'https://linkedin.com/andrew-kagwi',
			icon: 'fa fa-linkedin',
			label: 'linkedin',
		},
		{
			link: 'https://twitter.com/kagwidru',
			icon: 'fa fa-twitter',
			label: 'twitter',
		},

	],
	bio: 'My name is Kagwi Andrew, a self-taught software developer who works hard to be a worldclass developer,i started off my journey with Java and i developed several desktop apps and later on shifted to web apps and currently training on mobile apps.',
	skills:
	{
		proficientWith: ['react', 'javascript', 'git', 'github', 'bootstrap', 'html5', 'css3'],
		exposedTo: ['nodejs', 'spring-boot'],
	},
	hobbies: [
		{
			label: 'playing football',
			emoji: '📖',
		},
		{
			label: 'editing',
			emoji: '🎭',
		},
		{
			label: 'movies',
			emoji: '🎥',
		},

	],
	portfolio: [
		{
			title: 'Project 1',
			live: 'https://paytonpierce.dev', // this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
			source: 'https://github.com/paytonjewell', // this should be a link to the **repository** of the project, where the code is hosted.
			image: mock1,
		},
		{
			title: 'Project 2',
			live: 'https://paytonpierce.dev',
			source: 'https://github.com/paytonjewell',
			image: mock2,
		},
		{
			title: 'Project 3',
			live: 'https://paytonpierce.dev',
			source: 'https://github.com/paytonjewell',
			image: mock3,
		},
		{
			title: 'Project 4',
			live: 'https://paytonpierce.dev',
			source: 'https://github.com/paytonjewell',
			image: mock4,
		},
		{
			title: 'Project 5',
			live: 'https://paytonpierce.dev',
			source: 'https://github.com/paytonjewell',
			image: mock5,
		},
	],
};
