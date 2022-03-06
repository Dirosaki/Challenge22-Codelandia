import logoIMG from 'assets/logo.svg';

import * as S from './styles';

function Header() {
	return (
		<S.Header>
			<img src={logoIMG} alt="Logo Codelândia" height={32} />

			<div>
				<a href="https://github.com/Dirosaki">Meu Github</a>
				<S.JoinCommunityButton href="https://discord.gg/wNCWTVuxyz">
					Entrar na comunidade
				</S.JoinCommunityButton>
			</div>
		</S.Header>
	);
}

export default Header;
