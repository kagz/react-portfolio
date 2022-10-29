import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-body: #000000fc;
    --color-label: #797979;
		--text-color: #edfff8;
		--primary-black: #030303;
		--secondary-black: #0c0c0c;
		--hover: rgb(39, 42, 54);
  }

  html,
  body,
  #root {
    min-height: 100vh;
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
  font-size: 1.3rem;
	border-width: 3px;
  border-style: solid;
  border-image:linear-gradient(130deg,#eece1a,#391f5d 41.07%,#2e1b4a 76.05%);
	label{
		color: yellow !important;
	}
}

`;
