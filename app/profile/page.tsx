'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@/components/Profile';
import { Post } from '@/types/types';

const MyProfile = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${session?.user?.id}/posts`);
			const data: Post[] = await response.json();

			setPosts(data);
		};
		if (session?.user?.id) fetchPosts();
	}, []);

	const handleEdit = (post: Post) => {
		router.push(`/update-prompt?id=${post?._id}`);
	};

	const handleDelete = async (post: Post) => {
		const hasConfirmed = confirm(
			'Are you sure you want to delete this prompt?',
		);
		if (hasConfirmed && post._id) {
			try {
				await fetch(`api/prompt/${post._id.toString()}`, {
					method: 'DELETE',
				});

				const filteredPosts = posts.filter(p => p._id !== post._id);
				setPosts(filteredPosts);
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<Profile
			name='My'
			desc='Welcome to your personalized profile page'
			data={posts}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	);
};
export default MyProfile;
