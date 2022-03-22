import type { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

const Hello: NextPageWithLayout = () => {
	return (
		<>
			<h3>Hello</h3>
		</>
	);
};

export default Hello;

Hello.getLayout = (page: ReactElement) => {
	return (
		<>
			<h3>Custom Layout'ım</h3>
			{page}
		</>
	);
};
