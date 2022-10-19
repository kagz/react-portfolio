import { createGlobalStyle } from 'styled-components';
// import 'react-spring-modal/dist/index.css';

// git@github.com:kagz/react-portfolio.git


export default createGlobalStyle`
  :root {
    --color-body: #000000fc;
    --color-label: #797979; // Unsure if named well #000000
		--text-color: #edfff8;
// adding dynamic styles
		--primary-black: #030303;
		--secondary-black: #0c0c0c;
		--hover: rgb(39, 42, 54);
  }

  html,
  body,
  #root {
    min-height: 100vh;
/*
		-webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-overflow-scrolling: touch; */
  }

  body {
    padding-bottom: 4.25rem;
    background-color: var(--color-body);
		color: var(--text-color);
  }


/* =================== scroll bar =========================*/


/* width */
::-webkit-scrollbar {
	height: 0;
  width: 0;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(44, 43, 43);
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #2b2c2b;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:#2b2c2b;
}

/* ===================  =========================*/
.active {
  /* text-decoration: none; */
  /* background-color: blue; */
  font-size: 40px;
	color: red !important;
		border-bottom: 5px solid;
  border-image-slice: 1;
	label{
		color: yellow !important;
	}
}

`;
