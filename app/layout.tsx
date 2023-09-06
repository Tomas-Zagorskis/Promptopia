import { FC, ReactNode } from 'react';

import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import '../styles/globals.css';

export const metadata = {
	title: 'Promptopia',
	description: 'Discover & Share AI Prompts',
};

interface Props {
	children?: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='assets/images/logo.svg'
					type='image/svg'
					sizes='32x32'
				/>
			</head>
			<body>
				<Provider>
					<div className='main'>
						<div className='gradient' />
					</div>
					<main className='app'>
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};
export default RootLayout;
