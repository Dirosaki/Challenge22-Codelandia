import logoIMG from 'assets/logo.svg';

import * as S from './styles';

function Header() {
	return (
		<S.Header>
			<img src={logoIMG} alt="Logo Codelândia" height={32} />

			<div>
				<a href="https://github.com/Dirosaki" target="_blank" rel="noreferrer">
					Meu Github
				</a>
				<S.JoinCommunityButton
					href="https://discord.gg/wNCWTVuxyz"
					target="_blank"
					rel="noreferrer"
				>
					Entrar na comunidade
				</S.JoinCommunityButton>
			</div>
		</S.Header>
	);
}

export default Header;
