import Footer from "./Footer";
import { Caption } from "./Completed";

const TodoList = ({ todoList, setTodoList, setCompleted }) => {
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
			setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
			setCompleted((prevValue) => [...prevValue, ...todoList.filter((todo) => todo.id == id)]);
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
			</div>
			{todoList.length === 0 ? (
				<Caption text={"Nothing here"} />
			) : (
				<Caption text={"Click on checkbox to mark completed"} />
			)}

			<Footer x={todoList} />
		</>
	);
};

export default TodoList;
