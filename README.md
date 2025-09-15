# 📌 Taskify — To-Do App with Categories

A simple full-stack task manager where users can register, log in, and manage tasks with categories.  
Built with **Node.js, Express, MongoDB, JWT, and React (Vite)**.

---

## 🚀 Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/taskify.git
cd taskify
```

### 2. Backend
```bash
cd backend
npm install
```

Start the backend:
```bash
npm run dev
```

Server will run at: http://localhost:5000

---

## 🔑 Test Credentials (Example)
To test in Postman, first register a user:

POST http://localhost:5000/auth/register
```json
{
  "name": "Test User",
  "email": "test@test.com",
  "password": "secret123"
}
```
Then login:

POST http://localhost:5000/auth/login
```json
{
  "email": "test@test.com",
  "password": "secret123"
}
```
✅ Response:
```json
{ "token": "your_jwt_here" }
```

---

## 📌 API Endpoints

### Auth
- POST /auth/register → Register new user
- POST /auth/login → Login & get JWT

### Tasks (Protected — requires JWT)
- POST /tasks → Create a task
  - Example:
    ```json
    { "title": "Finish report", "category": "work" }
    ```
- GET /tasks → Get all tasks
- GET /tasks?category=work → Get tasks filtered by category
- PATCH /tasks/:id → Update a task
  - Example:
    ```json
    { "isDone": true }
    ```
- DELETE /tasks/:id → Delete a task

---

## ✅ Tech Stack
Backend: Node.js, Express, MongoDB (Mongoose), JWT, Bcrypt
