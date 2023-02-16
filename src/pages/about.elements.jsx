import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';

export const MainCont = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1140px;
	min-height: 80vh;
	padding-right: 15px;
	padding-left: 15px;
`;

export const TopWrapper = styled.div`

/*
##Device = Desktops
##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {

	/* CSS */
	display: flex;
	justify-content: center;
	/* border: solid purple 1px; */

}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

	/* CSS */
	flex-direction: column;
}

/*
##Device = Low Resolution Tablets, Mobiles (Landscape)
##Screen = B/w 481px to 767px
*/

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

export const ImageWrapper = styled.div`
	display: flex;
	vertical-align: center;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const Me = styled(Image)`
	border-radius: 50%;
	height: 35vh;
	width: 35vh;
	padding: 0.75rem;
	margin-bottom: 1rem;
	margin-right: 2rem;
	max-width: 100%;
	box-shadow: 0 0.5rem 1rem #0006;
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

export const InfoWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	h1,h2{
		color: #eece1a;
		margin: 0;
		font-weight: 400;
		text-transform: capitalize;
	}

	p{
		font-weight: 200;
		font-size: 1rem;

	}
	ul{
		list-style: none;
		display: flex;
		padding: 0;
		text-transform: capitalize;
		gap: 1rem;
	}
	li{
		color: #f8f8f8;
		transition: color .4s;
		font-size: 1rem;
		line-height: 1.5;
		transition: all .25s ease;
	span{
		font-size: 1.5rem;
	}
	}

	li:hover {

		transform: translateY(-3px);
	}
`;

export const BottomWrapper = styled.div`

	/* border: solid red 1px; */
	align-self: end;
	width: 100%;

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
	/* grid-template-columns: repeat(auto-fit, minmax(18em, 1fr)); */
	grid-gap: 2em;
	grid-template-columns: repeat(3, 1fr);

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

export const Card = styled.div`
	border-radius: 16px;
	box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
	transition: 0.4s;
	padding: 14px;
	min-height: 149px;
	background: #0e0e0f;
	color: #e0e0e0;
	cursor: pointer;
	margin: 8px 8px 8px 8px;
	flex: 1 0 150px;
	/* width: 100%; */
	ul{
	list-style: none;
	padding: 0;
	padding-top: 12px;
	padding-bottom: 16px;

	li{

		display: flex;
		justify-content: space-between;
		text-transform: capitalize;
		align-items: center;
	}
	}

	&:hover {
	transform: scale(0.9, 0.9);
	}

`;
export const CardHeader = styled.div`
	padding: 14px 16px 6px;
	color: #eece1a;
	text-align: left;
	text-transform: capitalize;
`;

export const TechIcons = styled(Image)`
	margin-left: 8px;
	width: 24px;
	height: 24px;
	border-radius: 50%;
`;

export const Span = styled.span`
	margin-left: 24px;
	color: #e0e0e0;
	text-align: right;
`;
