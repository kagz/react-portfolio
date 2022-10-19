import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/about', element: <About /> },
	{ path: '/portfolio', element: <Portfolio /> },
];

export default routes;
