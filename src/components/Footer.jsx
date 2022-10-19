import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
	display: flex;
justify-content: center;
`;
function Footer() {
	return (
		<Content>
			  &copy; {new Date().getFullYear() } , KagwiAndrew.

		</Content>
	);
}

export default Footer;
