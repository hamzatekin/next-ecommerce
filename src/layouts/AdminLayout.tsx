import { AppShell, Header, Navbar, useMantineTheme, Text, MediaQuery, Burger } from '@mantine/core';
import { ReactNode, useState } from 'react';

interface PublicLayoutProps {
	children?: ReactNode;
}

const AdminLayout = ({ children }: PublicLayoutProps) => {
	const [opened, setOpened] = useState(false);
	const theme = useMantineTheme();

	return (
		<>
			<AppShell
				padding="md"
				navbarOffsetBreakpoint="sm"
				// fixed prop on AppShell will be automatically added to Header and Navbar
				fixed
				navbar={
					<Navbar
						p="md"
						// Breakpoint at which navbar will be hidden if hidden prop is true
						hiddenBreakpoint="sm"
						// Hides navbar when viewport size is less than value specified in hiddenBreakpoint
						hidden={!opened}
						// when viewport size is less than theme.breakpoints.sm navbar width is 100%
						// viewport size > theme.breakpoints.sm – width is 300px
						// viewport size > theme.breakpoints.lg – width is 400px
						width={{ sm: 300, lg: 400 }}>
						<Text>Application navbar</Text>
					</Navbar>
				}
				header={
					<Header height={70} p="md">
						{/* Handle other responsive styles with MediaQuery component or createStyles function */}
						<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
							<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
								<Burger
									opened={opened}
									onClick={() => setOpened((o) => !o)}
									size="sm"
									color={theme.colors.gray[6]}
									mr="xl"
								/>
							</MediaQuery>

							<Text>Application header</Text>
						</div>
					</Header>
				}
				styles={(theme) => ({
					main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
				})}>
				{children}
			</AppShell>
		</>
	);
};

export default AdminLayout;
