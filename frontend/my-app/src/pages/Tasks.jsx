import { useEffect, useState } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "../api";
import TaskForm from "../components/TaskForm";

export default function Tasks() {
	const [tasks, setTasks] = useState([]);

	const loadTasks = async () => {
		const { data } = await fetchTasks();
		setTasks(data);
	};

	useEffect(() => {
		loadTasks();
	}, []);

	const handleAdd = async (task) => {
		await addTask(task);
		loadTasks();
	};

	const handleToggle = async (id, isDone) => {
		await updateTask(id, { isDone: !isDone });
		loadTasks();
	};

	const handleDelete = async (id) => {
		await deleteTask(id);
		loadTasks();
	};

	return (
		<div>
			<h2>Tasks</h2>
			<TaskForm onAdd={handleAdd} />
			<ul>
				{tasks.map((t) => (
					<li key={t._id}>
						<span style={{ textDecoration: t.isDone ? "line-through" : "" }}>
							{t.title} ({t.category})
						</span>
						<button onClick={() => handleToggle(t._id, t.isDone)}>
							{t.isDone ? "Undo" : "Done"}
						</button>
						<button onClick={() => handleDelete(t._id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}
