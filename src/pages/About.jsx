/* eslint-disable react/no-array-index-key */
import React from 'react';
import { info } from '../data/index';
import {
	MainCont, TopWrapper, ImageWrapper, Me, InfoWrapper,
	BottomWrapper, Card, CardHeader, TechIcons, Span,
} from './about.elements';

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
						<CardHeader>{hobby.label}</CardHeader>
						<ul>
							{
								hobby.stacks.map((stack, i) => (
									<li key={i}>

										<div>
											<TechIcons src={stack.icon} />
											<Span>
												<small>
													{stack.name}
												</small>
											</Span>
										</div>

									</li>
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
