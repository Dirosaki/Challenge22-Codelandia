import { useEffect, useState } from 'react';

import Card from 'components/Card';
import Footer from 'components/Footer';
import Header from 'components/Header';

import dataChallenges from 'assets/challenges.json';

import * as S from './styles';

type ChallengesProps = {
	id: number;
	challenge: number;
	author: string;
	paragraph: string;
	background: string;
	demo: string;
	github: string;
};

function Home() {
	const [challenges, setChallenges] = useState<ChallengesProps[]>([]);

	useEffect(() => {
		const sortChallenge = dataChallenges.sort((challengeA, challengeB) =>
			challengeA.challenge > challengeB.challenge ? 1 : -1
		);
		setChallenges(sortChallenge);
	}, []);

	return (
		<S.Container>
			<Header />
			<strong>Comunidade DEV</strong>
			<h1>Projetos da comunidade Codelândia</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
				ligula, accumsan nec cursus in, eleifend sit amet dui.
			</p>
			<S.CardWrapper>
				{challenges.map((challenge) => (
					<Card key={challenge.id} {...challenge} />
				))}
			</S.CardWrapper>
			<Footer />
		</S.Container>
	);
}

export default Home;
