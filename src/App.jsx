import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import GlobalStyle from './global-style';
import HeaderComponent from './components/Header';
import Footer from './components/Footer';
import { CenterComponents, RouteComponents } from './index.elements';

function App() {
	const element = useRoutes(routes);
	return (
		<>
			<GlobalStyle />
			<CenterComponents>
				<HeaderComponent />
				<RouteComponents>
					{element}
				</RouteComponents>
				<Footer />
			</CenterComponents>
		</>
	);
}

export default App;
