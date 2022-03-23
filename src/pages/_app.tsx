import { MantineProvider } from '@mantine/core';
import { PageLayouts } from '../misc/enums';
import { AppPropsWithLayout } from '../../types';
import { myTheme } from '../../assets/theme';
import PublicLayout from '../layouts/PublicLayout';
import AdminLayout from '../layouts/AdminLayout';

const App = ({ Component, pageProps, router }: AppPropsWithLayout) => {
	const layout = Component.layout || null;

	switch (layout) {
		case PageLayouts.ADMIN: {
			return (
				<MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
					<AdminLayout>
						<Component {...pageProps} />
					</AdminLayout>
				</MantineProvider>
			);
		}
		case PageLayouts.PUBLIC: {
			return (
				<MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
					<PublicLayout>
						<Component {...pageProps} />
					</PublicLayout>
				</MantineProvider>
			);
		}
		case null: {
			if (router.pathname.startsWith('/admin')) {
				return (
					<MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
						<AdminLayout>
							<Component {...pageProps} />
						</AdminLayout>
					</MantineProvider>
				);
			} else {
				return (
					<MantineProvider withGlobalStyles withNormalizeCSS theme={myTheme}>
						<PublicLayout>
							<Component {...pageProps} />
						</PublicLayout>
					</MantineProvider>
				);
			}

			Error(`No Layout specified for page ${Component.displayName}`);
		}
		default:
	}
};

export default App;
