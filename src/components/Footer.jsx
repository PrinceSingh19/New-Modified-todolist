import React from "react";

const Footer = ({ todoList }) => {
	return (
		<div className="flex bg-lime-50 justify-around mt-4 p-2">
			<div className="w-1/2 flex justify-start">
				<span className="pl-2">{todoList.length} items left</span>
			</div>
			<div className="w-1/2 flex justify-around space-x-2 ">
				<button className="hover:bg-gray-300">All</button>
				<button className="hover:bg-gray-300">Active</button>
				<button className="hover:bg-gray-300">Completed</button>
			</div>
		</div>
	);
};

export default Footer;
