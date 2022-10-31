/* eslint-disable react/no-array-index-key */
import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import { info } from '../data/index';
import {
	MainCont, ProjectGrid, Project,
	CardHeader, CardTitle, CardBody,
	Footer, CTA, SourceBtn, LiveBtn,
} from './portfolio.elements';

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
									proj.stacks.map((tech, i) => (
										<li key={i}>
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
