import { AppProps } from 'next/app';
import { NextPage } from 'next';

export type NextPageWithLayout = NextPage & {
	layout?: PageLayouts;
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};
