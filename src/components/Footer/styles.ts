import styled, { css } from 'styled-components';

export const Footer = styled.footer`
	${({ theme }) => css`
		margin-top: 5.625rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		div {
			display: flex;
			gap: 3rem;

			span {
				font-size: 1.125rem;
				font-family: ${theme.fonts.IBMPlexMono};
				color: ${theme.colors.gray};
			}

			a {
				text-decoration: none;
				color: currentColor;
				transition: color 0.15s ease-out;

				@media (hover: hover) {
					&:hover {
						color: ${theme.colors.green};
					}
				}
			}
		}

		@media (max-width: 35rem) {
			div {
				gap: 2rem;

				span {
					font-size: 0.875rem;
				}
			}
		}

		@media (max-width: 27.5rem) {
			flex-direction: column;
			gap: 1.25rem;

			div {
				gap: 2rem;

				span {
					font-size: 1rem;
				}
			}
		}

		@media (max-width: 25rem) {
			div {
				gap: 1rem;

				span {
					font-size: 0.875rem;
				}
			}
		}
	`}
`;
