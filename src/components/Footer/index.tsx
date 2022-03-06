import logoIMG from 'assets/logoshort.svg';

import * as S from './styles';

function Footer() {
	return (
		<S.Footer>
			<img src={logoIMG} alt="Logo Codelândia" height={32} />
			<div>
				<span>
					© 2022 - <a href="https://github.com/Dirosaki">Diego Gomes</a>
				</span>
				<span>Codelândia</span>
			</div>
		</S.Footer>
	);
}

export default Footer;
