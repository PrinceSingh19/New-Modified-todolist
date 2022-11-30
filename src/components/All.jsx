import React from "react";
import Footer from "./Footer";

const All = ({ todoList, completed, setTodoList }) => {
	const handleCheck = (e, id) => {
		if (e.target.checked) {
			setTodoList((prevList) => [
				...prevList.map((todo) => {
					if (todo.id == id) {
						todo.completed = true;
					}
					return todo;
				}),
			]);
		}
	};
	return (
		<>
			<div className="m-1 p-1 rounded-lg h-72 overflow-auto">
				{todoList.map((todo) => {
					return (
						<div key={todo.id}>
							<div className="mt-2 text-slate-700 flex justify-between items-center">
								<div className="flex items-center w-2/3 break-all ">
									<input
										type="checkbox"
										className="inline h-4 w-4 focus:ring-2 focus:ring-blue-500/50"
										onChange={(e) => handleCheck(e, todo.id)}
									/>
									<p className=" inline pl-2">{todo.title}</p>
								</div>
								<p className=" inline pl-2 text-xs w-1/3">{todo.date}</p>
							</div>
							<hr />
						</div>
					);
				})}
				{completed.map((todo) => {
					return (
						<div key={todo.id}>
							<div className="mt-2 text-slate-700 flex justify-between items-center">
								<div className="flex items-center w-2/3 break-all ">
									<input
										type="checkbox"
										className="inline h-4 w-4 focus:ring-2 focus:ring-blue-500/50"
										defaultChecked
									/>
									<p className=" inline pl-2">{todo.title}</p>
								</div>
								<p className=" inline pl-2 text-xs w-1/3">{todo.date}</p>
							</div>
							<hr />
						</div>
					);
				})}
			</div>
			<caption className="text-xs text-slate-400">All items</caption>

			<Footer x={todoList} y={completed} />
		</>
	);
};

export default All;
