'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
	session?: Session | null | undefined;
}
const Provider: FC<Props> = ({ children, session }) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};
export default Provider;
