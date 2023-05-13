import '@styles/globals.css';
import { FC, ReactNode } from 'react';

export const metada = {
	title: 'Promptopie',
	description: 'Discover & Share AI Prompts',
};

interface Props {
	children?: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<div className='main'>
					<div className='gradient' />
					<main className='app'>{children}</main>
				</div>
			</body>
		</html>
	);
};
export default RootLayout;
