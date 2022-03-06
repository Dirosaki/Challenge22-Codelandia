import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${theme.colors.dark};
		color: ${theme.colors.light};
	}
`}
`;

export default GlobalStyle;
