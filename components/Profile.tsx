import { Key } from 'react';
import PromptCard from './PromptCard';

interface ProfileProps {
	name: string;
	desc: string;
	data: any;
	handleEdit: any;
	handleDelete: any;
}

const Profile: React.FC<ProfileProps> = ({
	name,
	desc,
	data,
	handleEdit,
	handleDelete,
}) => {
	return (
		<section className='w-full'>
			<h1 className='head_text text-left'>
				<span className='blue_gradient'>{name} Profile</span>
			</h1>
			<p className='desc text-left'>{desc}</p>
			<div className='mt-10 prompt_layout'>
				{data.map((post: { _id: Key | null | undefined }) => (
					<PromptCard
						key={post._id}
						post={post}
						handleEdit={() => handleEdit && handleEdit(post)}
						handleDelete={() => handleDelete && handleDelete(post)}
						handleTagClick={undefined}
					/>
				))}
			</div>
		</section>
	);
};
export default Profile;
