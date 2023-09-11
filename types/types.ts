export type Post = {
	creator?: User;
	_id?: string;
	prompt: string;
	tag: string;
};

export type User = {
	email: string;
	username: string;
	image: string;
	_id: string;
};
