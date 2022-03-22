import { Button, Container, Grid } from '@mantine/core';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const HomePage: NextPage = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<>
			<Grid>
				<Grid.Col xs={12}>Header</Grid.Col>
				<Grid.Col xs={12}>
					{count}
					<Button variant="subtle" onClick={increment} type="button">
						Click me
					</Button>
					<Link href="/hello">/hello</Link>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default HomePage;
