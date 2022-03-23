import { Button, Grid } from '@mantine/core';
import Link from 'next/link';
import { PageLayouts } from '../misc/enums';
import { NextPageWithLayout } from '../../types';

const HomePage: NextPageWithLayout = () => {
	return (
		<>
			<Grid>
				<Grid.Col xs={12}>Header</Grid.Col>
				<Grid.Col xs={12}>
					<Link href="/hello" passHref>
						<Button component="a" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
							Hello
						</Button>
					</Link>
					<Link href="/admin" passHref>
						<Button component="a" variant="filled">
							Admin
						</Button>
					</Link>
				</Grid.Col>
			</Grid>
		</>
	);
};

HomePage.layout = PageLayouts.ADMIN;

export default HomePage;
