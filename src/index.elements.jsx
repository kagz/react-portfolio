import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const RouteComponents = styled.div`
min-height: 70vh;
background-color: #030303;
padding-top: 0.75rem;
margin-top: 5rem;
`;

export const CenterComponents = styled(Container)`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: auto;
margin-right: auto;
max-width: 1140px;
padding-right: 15px;
padding-left: 15px;
`;
