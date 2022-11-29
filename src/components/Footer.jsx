import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
	return (
		<div className="flex bg-lime-50 justify-around mt-4 p-2">
			<div className="w-1/2 flex justify-start">
				{props.y ? (
					<span
						className="pl-2"
						style={{
							color: "#fff",
							background: "#7600dc",
							padding: 5,
							borderRadius: 5,
						}}
					>
						{props.x.length + props.y.length} items
					</span>
				) : (
					<span
						className="pl-2"
						style={{
							color: "#fff",
							background: "#7600dc",
							padding: 5,
							borderRadius: 5,
						}}
					>
						{props.x.length} items
					</span>
				)}
			</div>
			<div className="w-1/2 flex justify-around space-x-2 ">
				<NavLink
					to="/active"
					style={({ isActive }) => ({
						color: isActive ? "#fff" : "#545e6f",
						padding: 5,
						borderRadius: 5,
						background: isActive ? "#7600dc" : "#f0f0f0",
					})}
				>
					<button>Active</button>
				</NavLink>
				<NavLink
					to="/completed"
					style={({ isActive }) => ({
						color: isActive ? "#fff" : "#545e6f",
						background: isActive ? "#7600dc" : "#f0f0f0",
						padding: 5,
						borderRadius: 5,
					})}
				>
					<button className="active:bg-cyan-700 focus:bg-cyan-700">Completed</button>
				</NavLink>
				<NavLink
					to="/all"
					style={({ isActive }) => ({
						color: isActive ? "#fff" : "#545e6f",
						background: isActive ? "#7600dc" : "#f0f0f0",
						padding: 5,
						borderRadius: 5,
					})}
				>
					<button className="active:bg-cyan-700 focus:bg-cyan-700">All</button>
				</NavLink>
			</div>
		</div>
	);
};

export default Footer;
