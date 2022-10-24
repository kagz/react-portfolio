import React from 'react';
import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';
import * as FontAwesome from 'react-icons/fa';
import { info } from '../data/index';
// import me from '../img/mimi.jpg';

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

const Avatar = styled(Image)`
	border-radius: 50%;
	height: 35vh;
	width: 35vh;
	padding: 0.75rem;
	margin-bottom: 1rem;
	margin-right: 2rem;
	background: -webkit-linear-gradient(135deg, rgb(0, 255, 164), rgb(166, 104, 255));
`;

const MiniBio = styled.ul`
padding: 0.8rem;
list-style: none;

/* display:flex; */
gap: 1.5rem;
/* justify-content: center; */
font-size: 1rem;

li{
	color: #f8f8f8;
    transition: color .4s;
		font-size: 1rem;
    line-height: 1.5;

		span{
			margin-right: 1rem;
			font-size: 1.5rem;
		}
}
li:hover {
	transition: all .25s ease;
    transform: translateY(-3px);
}
`;
const SocialInfo = styled.div`
display:flex;
gap:1.5rem;
justify-content: center;
font-size: 2rem;

a{
	text-decoration: none;
	color: #f8f8f8;
  transition: color .4s;

}
a:hover {
    transition: color .2s ease;
		color: #c9c9c9;
}
`;

function Home() {
	// const icon = React.createElement(FontAwesome[iconString]);
	return (
		<MainCont>
			<Avatar src={info.selfPortrait} />
			<div>
				<h1>Hey, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span>🤚</span>
				</h1>
				<h2>{info.position}.</h2>
				<MiniBio>

					{info.miniBio.map((bio, index) => (
						<li key={index}>
							<span>{bio.emoji}</span>{bio.text}
						</li>
					))}
				</MiniBio>
				<SocialInfo>
					{info.socials.map((social, index) => (

						<a
							key={index}
							target="_blank"
							aria-label={social.label}
							rel="noopener noreferrer"
							href={social.link}
						>
							{React.createElement(FontAwesome[social.icon])}
						</a>

					))}
				</SocialInfo>
			</div>
		</MainCont>
	);
}

export default Home;
