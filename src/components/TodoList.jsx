import Footer from "./Footer";

const TodoList = ({ todoList, setTodoList, setCompleted, setAll, completed }) => {
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
						<div className="mt-2 text-slate-600" key={todo.id}>
							<input
								type="checkbox"
								className="inline h-4 w-4 focus:ring-2 focus:ring-blue-500/50"
								onChange={(e) => handleCheck(e, todo.id)}
							/>
							<p className=" inline pl-2">{todo.title}</p>
							<hr />
						</div>
					);
				})}
			</div>
			<Footer x={todoList} />
		</>
	);
};

export default TodoList;
