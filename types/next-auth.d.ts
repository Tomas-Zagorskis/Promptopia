import NextAuth, { DefaultUser } from 'next-auth';

declare module 'next-auth' {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			/** Populate the user with properties like postal address... */
		} & DefaultUser;
	}
	interface Profile {
		email: string;
		email_verified: boolean;
		name: string;
		picture: string;
	}
}
