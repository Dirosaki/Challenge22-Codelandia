import Button from 'components/Button';

import * as S from './styles';

type CardProps = {
	challenge: number;
	author: string;
	paragraph: string;
	background?: string;
	demo: string;
	github: string;
};

function Card({
	challenge,
	author,
	paragraph,
	background,
	demo,
	github,
}: CardProps) {
	const formatTitle = `Desafio ${challenge} - ${author}`;

	return (
		<S.Card>
			<S.Image imageBackground={background} />
			<strong>{formatTitle}</strong>
			<p>{paragraph}</p>
			<S.ButtonWrapper>
				<Button href={demo} variant="primary">
					Demo
				</Button>
				<Button href={github} variant="secondary">
					Github
				</Button>
			</S.ButtonWrapper>
		</S.Card>
	);
}

export default Card;
