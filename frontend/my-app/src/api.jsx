import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Attach token if logged in
API.interceptors.request.use((req) => {
	const token = localStorage.getItem("token");
	if (token) req.headers.Authorization = `Bearer ${token}`;
	return req;
});

export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);

export const fetchTasks = () => API.get("/tasks");
export const addTask = (data) => API.post("/tasks", data);
export const updateTask = (id, data) => API.patch(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
