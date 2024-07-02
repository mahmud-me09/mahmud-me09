import React from "react";
import profilePic from "../src/assets/Mahmud.jpg";

const Template = () => {
	return (
		<div className="max-w-7xl h-screen mx-auto bg-gradient-to-r from-green-50 to-red-50">
			<div className="flex h-screen">
				<aside className="w-3/12 border-r-2 border-gray-200 flex flex-col items-center">
                    <h1 className="">Mahmud <br /> Web Developer</h1>
					<div>
						<img
							className="rounded-full border-2 p-2 w-48 h-48"
							src={profilePic}
							alt="my image"
						/>
					</div>
				</aside>
				<aside className="w-9/12 ">
					<div>
						<img
							src="https://i.ibb.co/gFbJ53c/1714668614643.jpg"
							alt="1714668614643"
							className="rounded-b-xl"
						></img>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Template;
