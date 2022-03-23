import { Button } from '@mantine/core';
import Link from 'next/link';
import { PageLayouts } from '../misc/enums';
import { NextPageWithLayout } from '../../types';


const Hello: NextPageWithLayout = () => {
	return (
		<>
			<Link href="/" passHref>
				<Button component="a" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
					Next link button
				</Button>
			</Link>
		</>
	);
};

Hello.layout = PageLayouts.ADMIN;

export default Hello;
