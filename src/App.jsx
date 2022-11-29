import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Completed from "./components/Completed";
import Header from "./components/Header";
import All from "./components/All";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
	const [input, setInput] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [completed, setCompleted] = useState([]);
	const [all, setAll] = useState([]);

	return (
		<>
			<div className="bg-slate-200 p-8 m-5">
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
						<Route path="/completed" element={<Completed completed={completed} />} />
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
