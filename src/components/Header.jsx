import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';
// import { FaUnlock } from 'react-icons/fa';
// import { FiMessageSquare, FiBell } from 'react-icons/fi';
import getLinks from './nav-links';

const Nav = styled.nav`
transition: all 250ms ease;

`;
const UL = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8rem;
`;

const ListItem = styled.li`
	list-style-type: none;
	font-size: 1.3rem;
	margin: 0 0.8rem;
transition: all 250ms ease;
&:hover{
	transform: translateY(-3px);
}
`;

const LinkTag = styled(Link)`
	text-decoration: none;
	color: #ffffff !important;
`;

const LinkName = styled.label`
	/* padding-bottom: 0.5rem; */
	color: purple;
`;

function Header() {
	const location = useLocation();
	const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
	const links = getLinks();
	return (
		<div>
			<Nav>
				<UL>
					{links.map((link, index) => (
						<ListItem
							key={index}
							className={(link.active === active) ? 'active' : ''}
						>
							<LinkTag
								to={link.to}
								onClick={() => setActive(link.active)}
							>
								<LinkName>	{link.name}</LinkName>
							</LinkTag>
						</ListItem>
					))}
				</UL>
			</Nav>
		</div>
	);
}

export default Header;
