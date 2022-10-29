import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import * as FontAwesome from 'react-icons/fa';
import { info } from '../data/index';

const MainCont = styled(Container)`
  display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1140px;
	min-height: 80vh;
	padding-right: 15px;
	padding-left: 15px;
`;

const ProjectGrid = styled.div`

/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {

/* CSS */
max-width: 1100px;
	margin: 0 auto;
	/* display: flex; */
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
	grid-gap: 2em;
/* grid-template-columns: repeat(3, 1fr); */

}

/*
##Device = Laptops, Desktops
##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {

/* CSS */
grid-template-columns: repeat(3, 1fr);
}

/*
##Device = Tablets, Ipads (portrait)
##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {

/* CSS */
grid-template-columns: repeat(2, 1fr);
}

/*
##Device = Tablets, Ipads (landscape)
##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

/* CSS */
grid-template-columns: repeat(2, 1fr);
}

/*
##Device = Low Resolution Tablets, Mobiles (Landscape)
##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {

/* CSS */
grid-template-columns: repeat(2, 1fr);
}

/*
##Device = Most of the Smartphones Mobiles (Portrait)
##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {

/* CSS */
grid-template-columns: repeat(1, 1fr);
}


`;

const Project = styled.div`// card
	border-radius: 16px;
	box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
	transition: 0.4s;
	padding: 14px;
	min-height: 149px;
	max-width: 320px;
	background: #0e0e0f;
	color: #e0e0e0;
	cursor: pointer;
	position: relative;
	margin: 8px 8px 8px 8px;
	flex: 1 0 150px;
	&:hover {
	transform: scale(0.9, 0.9);
}
img {
	max-width: 100%;
}
`;

const CardHeader = styled.span`
	display: block;
	position: relative;
	height: 175px;
	overflow: hidden;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: rgba(white,.15);
	background-blend-mode: overlay;
	border-radius: 4px 4px 0 0;
	background-image: url("${props => props.imageUrl}");
`;

const CardTitle = styled.div`
	background: #1b1b1ad9;
	padding: 3.5% 0 2.5% 0;
	color: white;
	text-transform: uppercase;
	position: absolute;
	bottom: 0;
	width: 100%;

	h3{
	color: #eece1a;
	text-align: left;
	text-transform: capitalize;
	font-size: 1.2em;
	line-height: 1.2;
	padding: 0 3.5%;
	margin: 0;
	}

`;
const CardBody = styled.span`
	display: block;
	padding: 5% 5% 3% 5%;

	p{
		margin-bottom: 0;
		color: white;
	}

	ul{
		list-style: none;
    padding: 0;
    padding-top: 12px;
    padding-bottom: 36px;
    overflow: hidden;
    text-align: left;

	li{
	text-transform: capitalize;

	color: #8a8b8d;
	display: inline-block;
	background: #2f2f30;
	border-radius: 12px;
	padding: 2px 10px;
	margin: 4px 4px;
	font-size: 12px;
	height: 20px;
	}

	}

`;
const Footer = styled.span`
	display: block;
	width: 100%;
	overflow: hidden;
	color: #666;
	font-size: .78em;
	position: absolute;
	bottom: 2%;
	padding: 2%;
	left: 0;
	right: 0;
`;
const CTA = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SourceBtn = styled.a`
	text-decoration: none;
	padding-left: 0;
	padding-right: 0;
	text-align: center;
	flex-grow: 1;
	overflow: hidden;
	text-transform: uppercase;
	position: relative;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	padding: 12px 0;
	background-color: #334C5C;
	transition: all 0.2s;
	color: #e0e0e0;

&:hover {

color: #eece1a;
background-color: green;
}

`;
const LiveBtn = styled.a`
	text-decoration: none;
	padding-left: 0;
	padding-right: 0;
	text-align: center;
	flex-grow: 1;
	overflow: hidden;
	text-transform: uppercase;
	position: relative;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	margin-left: 2px;
	padding: 12px 0;
	background-color: #334C5C;
	transition: all 0.2s;
	color: #e0e0e0;

	&:hover {

color: #eece1a;
background-color: green;
}
`;

function Portfolio() {
	return (
		<MainCont>
			<ProjectGrid>

				{info.portfolio.map((proj, index) => (
					<Project key={index}>

						<CardHeader imageUrl={proj.image}>
							<CardTitle>
								<h3>{proj.title}</h3>
							</CardTitle>
						</CardHeader>

						<CardBody>
							<p>{proj.description}</p>
							<ul>
								{
									proj.stacks.map((tech, index) => (
										<li key={index}>
											<span>{tech}</span>
										</li>
									))
								}
							</ul>
						</CardBody>
						<Footer>
							<CTA>
								<SourceBtn href={proj.source} target="_blank">
									{React.createElement(FontAwesome.FaGithub)}
								</SourceBtn>
								<LiveBtn href={proj.live} target="_blank">
									{React.createElement(FontAwesome.FaEye)}
								</LiveBtn>
							</CTA>
						</Footer>
					</Project>
				))}

			</ProjectGrid>
		</MainCont>
	);
}

export default Portfolio;
