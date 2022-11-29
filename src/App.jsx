import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
function App() {
	const [input, setInput] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [completed, setCompleted] = useState([]);
	return (
		<>
			<div className="bg-slate-200 p-8">
				<div className="w-96 p-6 flex flex-col justify-center bg-white">
					<Header />
					<Todo input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList} />
					<TodoList todoList={todoList} setTodoList={setTodoList} setCompleted={setCompleted} />
					<Footer todoList={todoList} />
				</div>
			</div>
		</>
	);
}

export default App;
