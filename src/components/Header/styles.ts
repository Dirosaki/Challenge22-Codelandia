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
			gap: 62px;
		}

		a {
			font-family: ${theme.fonts.DMSans};
			text-decoration: none;
			text-transform: uppercase;
			letter-spacing: 0.01em;
			color: ${theme.colors.light};
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
