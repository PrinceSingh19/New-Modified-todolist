import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Completed from "./components/Completed";
import Header from "./components/Header";
import All from "./components/All";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
	const getActive = () => {
		let list = localStorage.getItem("todoActive");
		if (list) {
			const result = JSON.parse(localStorage.getItem("todoActive"));
			return result.flat();
		} else {
			return [];
		}
	};
	const getCompleted = () => {
		let list = localStorage.getItem("todoCompleted");
		if (list) {
			const result = JSON.parse(localStorage.getItem("todoCompleted"));
			return result.flat();
		} else {
			return [];
		}
	};
	const [input, setInput] = useState("");
	const [todoList, setTodoList] = useState([...getActive()]);
	const [completed, setCompleted] = useState([...getCompleted()]);
	const [all, setAll] = useState([]);

	useEffect(() => {
		localStorage.setItem("todoActive", JSON.stringify(todoList.flat()));
		localStorage.setItem("todoCompleted", JSON.stringify(completed.flat()));
	}, [todoList, completed]);

	return (
		<>
			<div className="bg-purple-600 p-1 m-5">
				<div className="w-96 p-6 flex flex-col justify-center bg-white">
					<Header />
					<Todo
						input={input}
						setInput={setInput}
						todoList={todoList}
						setTodoList={setTodoList}
						setAll={setAll}
					/>
					<Routes>
						<Route path="" element={<Navigate to="/active" />} />
						<Route
							path="/active"
							element={
								<TodoList
									todoList={todoList}
									setTodoList={setTodoList}
									setCompleted={setCompleted}
									setAll={setAll}
									completed={completed}
								/>
							}
						/>
						<Route
							path="/completed"
							element={<Completed completed={completed} setCompleted={setCompleted} />}
						/>
						<Route
							path="/all"
							element={<All todoList={todoList} completed={completed} setTodoList={setTodoList} />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
