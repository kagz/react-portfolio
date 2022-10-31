const links = [
	{
		name: 'Home',
		to: '/',
		active: 'home',
	},
	{
		name: 'About',
		to: '/about',
		active: 'about',
	},
	{
		name: 'Work',
		to: '/portfolio',
		active: 'portfolio',
	},
];

export default function getLinks() {
	return links;
}
