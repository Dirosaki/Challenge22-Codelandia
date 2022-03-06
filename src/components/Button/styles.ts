import styled, { css } from 'styled-components';

import { rgba } from 'polished';

type ButtonProps = {
	variant: 'primary' | 'secondary';
};

export const Button = styled.a<ButtonProps>`
	${({ theme, variant }) => css`
		height: 2.625rem;
		width: 10.3125rem;
		display: grid;
		place-items: center;
		border-radius: 0.25rem;
		border: none;
		font-weight: 700;
		font-family: ${theme.fonts.DMSans};
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;

		${variant === 'primary' &&
		css`
			background: ${rgba(theme.colors.green, 0.9)};
			color: ${theme.colors.dark};
			transition: background 0.15s ease-out;

			@media (hover: hover) {
				&:hover {
					background: ${rgba(theme.colors.green, 1)};
				}
			}
		`}

		${variant === 'secondary' &&
		css`
			background: transparent;
			border: 0.0625rem solid ${theme.colors.green};
			color: ${rgba(theme.colors.light, 0.9)};
			transition: color 0.15s ease-out;

			@media (hover: hover) {
				&:hover {
					color: ${rgba(theme.colors.light, 1)};
				}
			}
		`}

		@media (max-width: 82.5rem) {
			width: 100%;
		}
	`}
`;
