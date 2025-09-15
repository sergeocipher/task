import { useState } from "react";

export default function TaskForm({ onAdd }) {
	const [form, setForm] = useState({ title: "", description: "", category: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		onAdd(form);
		setForm({ title: "", description: "", category: "" });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder="Title"
				value={form.title}
				onChange={(e) => setForm({ ...form, title: e.target.value })}
			/>
			<input
				placeholder="Description"
				value={form.description}
				onChange={(e) => setForm({ ...form, description: e.target.value })}
			/>
			<input
				placeholder="Category"
				value={form.category}
				onChange={(e) => setForm({ ...form, category: e.target.value })}
			/>
			<button type="submit">Add Task</button>
		</form>
	);
}
