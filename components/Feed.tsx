'use client';

import {
	BaseSyntheticEvent,
	MouseEventHandler,
	useEffect,
	useState,
} from 'react';

import { Post } from '@/types/types';
import PromptCard from './PromptCard';

type PromptCardListType = {
	data: Post[];
	searchValue: string;
	handleTagClick: MouseEventHandler;
};

const PromptCardList = ({
	data,
	searchValue,
	handleTagClick,
}: PromptCardListType) => {
	const filteredData = data.filter(
		post =>
			post.creator?.username.includes(searchValue) ||
			post.tag.includes(searchValue),
	);
	return (
		<div className='mt-16 prompt_layout'>
			{filteredData.map(post => (
				<PromptCard
					key={post._id}
					post={post}
					handleTagClick={handleTagClick}
					handleEdit={undefined}
					handleDelete={undefined}
				/>
			))}
		</div>
	);
};

const Feed = () => {
	const [searchText, setSearchText] = useState('');
	const [posts, setPosts] = useState<Post[]>([]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value;
		setSearchText(searchValue);
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch('/api/prompt');
			const data = await response.json();
			setPosts(data);
		};
		fetchPosts();
	}, []);

	const handleTagClick = (e: BaseSyntheticEvent) => {
		const value: string = e.currentTarget.innerText.slice(1);
		setSearchText(value);
	};

	const handleSubmit = (e: BaseSyntheticEvent) => {
		e.preventDefault();
	};

	return (
		<section className='feed'>
			<form className='relative w-full flex-center' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Search for a tag or a username'
					value={searchText}
					onChange={handleSearchChange}
					required
					className='search_input peer'
				/>
			</form>

			<PromptCardList
				data={posts}
				searchValue={searchText}
				handleTagClick={handleTagClick}
			/>
		</section>
	);
};
export default Feed;
