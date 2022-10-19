import { info } from '../data/index'

const links = [
	{
		name: 'Home',
		to: '/',
		active: 'home',
	},
	{
		name: 'About Me',
		to: '/about',
		active: 'about',
	},
	// {
	// 	name: info.initials,
	// 	type: 'initials',
	// 	to: '/',
	// 	active: 'home',
	// },
	{
		name: 'Portfolio',
		to: '/portfolio',
		active: 'portfolio',
	},
];

export default function getLinks() {
	return links;
}
