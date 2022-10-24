import React from 'react';
import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';
import * as FontAwesome from 'react-icons/fa';
import { info } from '../data/index';

const MainCont = styled(Container)`
  display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1140px;
	min-height: 80vh;
	padding-right: 15px;
	padding-left: 15px;
`;

const TopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const ImageWrapper = styled.div`
	display: flex;
	vertical-align: center;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const Me = styled(Image)`
	border-radius: 50%;
	height: 35vh;
	width: 35vh;
	padding: 0.75rem;
	margin-bottom: 1rem;
	margin-right: 2rem;
	background: -webkit-linear-gradient(135deg, rgb(0, 255, 164), rgb(166, 104, 255));
`;

const InfoWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
  justify-content: center;

	h1,h2{
		color: #eece1a;
		margin: 0;
    font-weight: 400;
		text-transform: capitalize;
	}

	p{
	    font-weight: 200;
		font-size: 1rem;

	}
	ul{
		list-style: none;
		display: flex;
		padding: 0;
		text-transform: capitalize;
		gap: 1rem;
	}
`;
const BottomWrapper = styled.div`
	display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;
const Card = styled.div`
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 12%), 0 2px 2px 0 rgb(0 0 0 / 24%);
    border-radius: 8px;
 		padding: 4px;
    min-height: 149px;
    background: #181819;
    color: #e0e0e0;
    cursor: pointer;
    margin: 8px 8px 8px 8px;
    flex: 1 0 150px;
   		ul{
			list-style: none;
		padding: 0;
		}

		&:hover {
	transform: scale(1.05);
	-moz-transform: scale(1.05);
	-webkit-transform: scale(1.05);
}

`;
function About() {
	return (
		<MainCont>
			<TopWrapper>
				<ImageWrapper>
					<Me src={info.selfPortrait} />
				</ImageWrapper>
				<InfoWrapper>
					<h1>Bio.</h1>
					<p>
						{info.bio}
					</p>
					<h2>hobbies.</h2>
					<ul>
						{info.hobbies.map((hobby, index) => (
							<li key={index}>
								<span>{hobby.emoji}</span> <small>{hobby.label}</small>
							</li>
						))}
					</ul>
				</InfoWrapper>
			</TopWrapper>
			<BottomWrapper>
				{info.techStacks.map((hobby, index) => (
					<Card key={index}>
						<label>{hobby.label}</label>
						<span>{React.createElement(FontAwesome[hobby.emoji])}</span>
						 <ul>
							{
								hobby.stacks.map((stack, index) => (
									<li key={index}>{stack}</li>
								))
							}
						 </ul>
					</Card>
				))}
			</BottomWrapper>
		</MainCont>
	);
}

export default About;
