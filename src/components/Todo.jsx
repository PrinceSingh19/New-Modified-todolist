import React from "react";
import { v4 as uuidv4 } from "uuid";
const Todo = ({ input, setInput, setTodoList }) => {
	const handleChange = (e) => setInput(e.target.value);
	const addTask = () => {
		if (input === "") {
			alert("please enter todo");
			return;
		}
		setTodoList((prevList) => [
			...prevList,
			{ id: uuidv4(), title: input, completed: false, date: new Date().toLocaleDateString() },
		]);
		setInput("");
	};
	return (
		<div>
			<form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 absolute ml-2 mt-4 text-slate-400"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
				<input
					type="text"
					placeholder="Add Task"
					value={input}
					onChange={handleChange}
					className="w-full h-12 rounded-lg pl-10 mt-4 border-2 border-cyan-500  active:border-cyan-400"
				/>
				<button
					className="p-2 h-12 bg-purple-700 mt-4 ml-2 rounded-lg text-stone-50 px-3 hover:bg-purple-900"
					onClick={addTask}
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default Todo;
