import { useState } from "react";
import { register } from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await register(form);
		navigate("/login");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register</h2>
			<input
				placeholder="Name"
				value={form.name}
				onChange={(e) => setForm({ ...form, name: e.target.value })}
			/>
			<input
				placeholder="Email"
				value={form.email}
				onChange={(e) => setForm({ ...form, email: e.target.value })}
			/>
			<input
				type="password"
				placeholder="Password"
				value={form.password}
				onChange={(e) => setForm({ ...form, password: e.target.value })}
			/>
			<button type="submit">Register</button>
		</form>
	);
}
