import React from 'react';
import profilePic from "../src/assets/Mahmud.jpg"

const Template = () => {
    return (
		<div className='max-w-7xl mx-auto'>
			<aside>
				<div>
					<img
						className="rounded-full border-2 p-2 w-48 h-48"
						src={profilePic}
						alt="my image"
					/>
				</div>
			</aside>
		</div>
	);
};

export default Template;