/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import { info } from '../data/index';
import {
	MainCont, Avatar, MiniBio, SocialInfo,
} from './home.elements';

function Home() {
	return (
		<MainCont>
			<Avatar src={info.selfPortrait} />
			<div>
				<h1>Hi, I'm <span style={{ background: info.nameColor, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.initials}</span>
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
