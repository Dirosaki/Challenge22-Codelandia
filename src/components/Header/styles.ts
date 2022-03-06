import styled, { css } from 'styled-components';

export const Header = styled.header`
	${({ theme }) => css`
		margin-bottom: 5.625rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		div {
			display: flex;
			align-items: center;
			gap: 3.875rem;
		}

		a {
			font-family: ${theme.fonts.DMSans};
			text-decoration: none;
			text-transform: uppercase;
			letter-spacing: 0.01em;
			color: ${theme.colors.light};
		}

		@media (max-width: 78.125rem) {
			div {
				flex-direction: column-reverse;
				gap: 2rem;
			}
		}

		@media (max-width: 71.875rem) {
			flex-direction: column;
			gap: 2rem;
		}

		@media (max-width: 64rem) {
			flex-direction: row;

			div {
				flex-direction: row;
			}
		}

		@media (max-width: 55rem) {
			flex-direction: column;

			div {
				flex-direction: column-reverse;
			}
		}
	`}
`;

export const JoinCommunityButton = styled.a`
	${({ theme }) => css`
		padding: 1rem 1.5rem;
		border: 0.0625rem solid ${theme.colors.purple};
		border-radius: 0.375rem;
		transition: background 0.15s ease-out;

		@media (hover: hover) {
			&:hover {
				background: ${theme.colors.purple};
			}
		}
	`}
`;
