import styled, { css } from 'styled-components';

export const Container = styled.main`
	${({ theme }) => css`
		padding: 3rem 23rem;

		> strong {
			font-size: 24px;
			font-weight: 700;
			font-family: ${theme.fonts.IBMPlexMono};
			letter-spacing: 0.05em;
			text-transform: uppercase;
			color: ${theme.colors.green};
		}

		h1 {
			margin: 0.75rem 0 2rem;
			font-size: 4rem;
			font-weight: 600;
			font-family: ${theme.fonts.IBMPlexMono};
			max-width: 51rem;
		}

		> p {
			max-width: 50.75rem;
			font-size: 24px;
			font-family: ${theme.fonts.DMSans};
			color: ${theme.colors.gray};
		}
	`}
`;

export const CardWrapper = styled.div`
	${({ theme }) => css`
		margin-top: 5rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	`}
`;
