import styled, { css } from 'styled-components';

export const Container = styled.main`
	${({ theme }) => css`
		padding: 3rem 23rem;

		> strong {
			font-size: 1.5rem;
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
			font-size: 1.5rem;
			font-family: ${theme.fonts.DMSans};
			color: ${theme.colors.gray};
		}

		@media (max-width: 97.5rem) {
			padding: 3rem 14.5rem;
		}

		@media (max-width: 82.5rem) {
			h1 {
				max-width: 100%;
				font-size: 3.5rem;
			}
		}

		@media (max-width: 78.125rem) {
			padding: 3rem 16.25rem;

			h1 {
				font-size: 3rem;
			}
		}

		@media (max-width: 71.875rem) {
			h1 {
				font-size: 2.25rem;
			}

			> p {
				font-size: 1.25rem;
			}
		}

		@media (max-width: 64rem) {
			padding: 3rem 7.75rem;
		}

		@media (max-width: 55rem) {
			padding: 3rem 3rem;
		}

		@media (max-width: 28.75rem) {
			padding: 3rem 2rem;

			strong {
				font-size: 1.125rem;
			}

			h1 {
				font-size: 2rem;
			}

			p {
				font-size: 1rem;
			}
		}
	`}
`;

export const CardWrapper = styled.div`
	margin-top: 5rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;

	@media (max-width: 78.125rem) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 28.75rem) {
		margin-top: 3rem;
	}
`;
