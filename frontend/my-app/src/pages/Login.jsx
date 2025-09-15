import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [form, setForm] = useState({ email: "", password: "" });
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { data } = await login(form);
		localStorage.setItem("token", data.token);
		navigate("/tasks");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
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
			<button type="submit">Login</button>
		</form>
	);
}
