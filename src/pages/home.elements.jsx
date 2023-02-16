import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';

export const MainCont = styled(Container)`
/* border: solid 1px red; */
  display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1140px;
	min-height: 80vh;
	padding-right: 15px;
	padding-left: 15px;


	@media (min-width: 481px) and (max-width: 767px) {

	/* CSS */
	flex-direction: column;
}

/*
##Device = Most of the Smartphones Mobiles (Portrait)
##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
/* CSS */
flex-direction: column;
}
`;

export const Avatar = styled(Image)`
	border-radius: 50%;
	height: 35vh;
	width: 35vh;
	padding: 0.75rem;
	margin-bottom: 1rem;
	margin-right: 2rem;
	background: -webkit-linear-gradient(107deg, #0e0e0f, #3e2167);

	@media (min-width: 481px) and (max-width: 767px) {

/* CSS */
	margin-right: 0;
}

/*
##Device = Most of the Smartphones Mobiles (Portrait)
##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {

/* CSS */
	margin-right: 0;
}

`;

export const MiniBio = styled.ul`
	padding: 0.8rem;
	list-style: none;
	gap: 1.5rem;
	font-size: 1rem;

li{
	color: #f8f8f8;
	transition: color .4s;
	font-size: 1rem;
	line-height: 1.5;
	transition: all .25s ease;
	span{
		margin-right: 1rem;
		font-size: 1.5rem;
	}
}

li:hover {
  transform: translateY(-3px);
}
`;

export const SocialInfo = styled.div`
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
