import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import getLinks from './nav-links';

const Nav = styled.nav`
	display: flex;
	color: white;
	align-items: center;
	justify-content: center;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
	z-index: 999;
  background-color: #030303;
	margin-left: auto;
	margin-right: auto;
	max-width: 1140px;
	padding-right: 15px;
	padding-left: 15px;
	transition: all 250ms ease;
`;

const UL = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
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
	color: purple;
`;

function Header() {
	const location = useLocation();
	const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
	const links = getLinks();
	return (
		<>
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
		</>
	);
}

export default Header;
