import React from 'react';
import { useRoutes } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import routes from './routes';
import GlobalStyle from './global-style';
import HeaderComponent from './components/Header';
import Footer from './components/Footer';

const RouteComponents = styled.div`
	min-height: 70vh;
	background-color: #030303;
	margin-top: 4rem;
	padding-top: 0.75rem;
`;
const CenterComponents = styled(Container)`
  display: flex;
  flex-direction: column;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1140px;
	padding-right: 15px;
	padding-left: 15px;
`;

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
