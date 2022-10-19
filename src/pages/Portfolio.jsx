import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const MainCont = styled(Container)`
  display: flex;
  /* flex-direction: column; */
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1140px;
	min-height: 80vh;
	padding-right: 15px;
	padding-left: 15px;
`;

function Portfolio() {
	return (
		<MainCont>Portfolio</MainCont>
	);
}

export default Portfolio;
