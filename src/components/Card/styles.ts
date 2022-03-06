import styled, { css } from 'styled-components';

import illustration from 'assets/illustrationBackground.svg';

type ImageProps = {
	imageBackground?: string;
};

export const Card = styled.div`
	${({ theme }) => css`
		padding: 1.5rem;
		background: ${theme.colors.dark200};
		border-radius: 0.5rem;
		border: 0.0625rem solid ${theme.colors.purple};

		strong {
			margin: 1rem 0;
			display: block;
			font-size: 1.375rem;
			font-weight: 500;
			font-family: ${theme.fonts.IBMPlexMono};
		}

		p {
			font-size: 18px;
			font-family: ${theme.fonts.DMSans};
			color: ${theme.colors.gray};
		}
	`}
`;

export const Image = styled.div<ImageProps>`
	${({ theme, imageBackground }) => css`
		height: 13.875rem;
		width: 100%;
		background: url(${imageBackground || illustration}) no-repeat;
		background-color: ${theme.colors.dark};
		background-position: ${imageBackground ? 'top' : 'center'};
		background-size: ${imageBackground ? '100%' : 'initial'};
		border-radius: 0.25rem;
		transition: background-size 0.15s ease-out;

		@media (hover: hover) {
			&:hover {
				background-size: ${imageBackground ? '110%' : 'initial'};
			}
		}
	`}
`;

export const ButtonWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	gap: 1.5rem;
`;
