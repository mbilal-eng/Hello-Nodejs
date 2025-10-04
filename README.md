# Hello NodeJS

# 📘 Users CRUD API (Node.js + Express.js)

A simple **CRUD API** built with **Node.js + Express.js** to manage user data.
This project demonstrates API basics: create, read, update, delete, and simple validations.

---

## 🚀 Features

- Create a new user (with validation for email & password)
- Get all users
- Update a user by ID
- Delete a user by ID
- Test endpoint `/test` to check if the server is running

---

## 📂 User Object Structure

Each user has the following fields:

```json
{
  "id": 1,
  "name": "Bilal",
  "age": 21,
  "email": "bilal@gmail.com",
  "password": "123456789",
  "image_url": "https://profile.jpg",
  "phone": "03208211222",
  "city": "Karachi",
  "postalCode": "72550"
}
```

---

## 🛠 Installation & Setup

1. Clone the repo:

   ```bash
   git clone <repo-url>
   cd hello_nodejs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   node app.js
   # or (if using nodemon)
   npm run dev
   ```

Server will run at:
👉 `http://localhost:3000`

---

## 📌 API Endpoints

### ✅ Test Server

```http
GET /test
```

**Response:**

```json
{ "status": 200, "message": "Server is running Ok" }
```

---

### ✅ Create User

```http
POST /users
```

**Request Body (JSON):**

```json
{
  "name": "John Doe",
  "age": 25,
  "email": "john@example.com",
  "password": "123456",
  "image_url": "https://profile.jpg",
  "phone": "03001234567",
  "city": "Lahore",
  "postalCode": "54000"
}
```

---

### ✅ Get All Users

```http
GET /users
```

**Response:**

```json
{
  "status": 200,
  "message": "Users Fetched",
  "total_users": 2,
  "users": [ ... ]
}
```

---

### ✅ Update User

```http
PUT /users/:id
```

**Request Body (Partial JSON allowed):**

```json
{
  "name": "Updated User",
  "city": "Islamabad"
}
```

**Response:**

```json
{
  "status": 200,
  "message": "User Updated",
  "newUser": { ... }
}
```

---

### ✅ Delete User

```http
DELETE /users/:id
```

**Response:**

```json
{
  "status": 200,
  "message": "user is deleted with id = 1"
}
```

---

## 🔑 Notes

- Data is stored **in-memory** (array), so it resets on server restart.
- Later, you can extend this with a real database (MongoDB/Postgres).
- For development, use `nodemon` to auto-restart server on code changes.
