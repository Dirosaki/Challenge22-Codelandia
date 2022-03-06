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
	`}
`;
