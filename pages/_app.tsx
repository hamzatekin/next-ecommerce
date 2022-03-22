import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { myTheme } from '../assets/theme';
import PublicLayout from '../components/layouts/PublicLayout';

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	console.log('Component', Component);
	const getLayout = Component.getLayout || null;

	if (!getLayout) {
		return (
			<>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
					<PublicLayout>
						<Component {...pageProps} />
					</PublicLayout>
				</MantineProvider>
			</>
		);
	}

	return getLayout(<Component {...pageProps} />);
}
