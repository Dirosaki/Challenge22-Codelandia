import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			green: string;
			purple: string;
			dark: string;
			dark200: string;
			gray: string;
			light: string;
		};
		fonts: {
			DMSans: string;
			IBMPlexMono: string;
		};
	}
}
