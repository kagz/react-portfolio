import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;
`;
function Footer() {
	return (
		<Content> &copy; {new Date().getFullYear() } , Andy.</Content>
	);
}

export default Footer;
