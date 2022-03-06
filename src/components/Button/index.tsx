import { AnchorHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	variant: 'primary' | 'secondary';
	children: ReactNode;
};

function Button({ variant, children, ...props }: ButtonProps) {
	return (
		<S.Button variant={variant} target="_blank" rel="noreferrer" {...props}>
			{children}
		</S.Button>
	);
}

export default Button;
