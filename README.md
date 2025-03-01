# ✨ Financial Dashboard (React + Django + Redux)
A professional **Financial Dashboard** built with **ReactJS (frontend)** and **Django Rest Framework (backend)** using **Redux for state management**.

---

## 📈 Features
- **User Authentication (JWT-based)**
- **View Account Balance**
- **List of Recent Transactions**
- **Notifications System**
- **Redux for State Management**
- **Material UI for UI Design**
- **Django Rest Framework (DRF) as Backend API**
- **Token-based API Authentication**
- **Persistent User Sessions with Redux & LocalStorage**

---

## 📈 Project Setup Instructions
Follow these steps to **set up and run the project**.

---

## 🛠️ 1. Clone the Repository
```bash
git clone YOUR_GITHUB_REPO_URL
cd financial-dashboard
```

---

## 🛠️ 2. Backend Setup (Django)
### 🔹 Navigate to Backend
```bash
cd backend
```

### 🔹 Create a Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate      # For Windows
```

### 🔹 Install Dependencies
```bash
pip install -r requirements.txt
```

### 🔹 Apply Database Migrations
```bash
python manage.py migrate
```

### 🔹 Create a Superuser (Admin)
```bash
python manage.py createsuperuser
```
**(Follow the prompts to create an admin user)**

### 🔹 Start the Backend Server
```bash
python manage.py runserver
```
👉 The **Django API will be running at** `http://127.0.0.1:8000/`

---

## 🛠️ 3. Frontend Setup (React)
### 🔹 Navigate to Frontend
```bash
cd ../frontend
```

### 🔹 Install Dependencies
```bash
npm install
```

### 🔹 Start the React Frontend
```bash
npm start
```
👉 The **React app will be running at** `http://localhost:3000/`

---

## 🛠️ 4. API Authentication (Login)
### 🔹 Get an Access Token
Run this command to **log in and get a JWT token**:
```bash
curl -X POST http://127.0.0.1:8000/api/login/ -H "Content-Type: application/json" -d '{"username": "YOUR_USERNAME", "password": "YOUR_PASSWORD"}'
```
**Copy the "access" token from the response** and store it in the frontend:
```js
localStorage.setItem("token", "YOUR_ACCESS_TOKEN");
```
👉 **Now refresh the Dashboard at** `http://localhost:3000/dashboard`

---

## 🛠️ 5. API Endpoints
| Method | Endpoint | Description |
|--------|-------------|----------------------|
| `POST` | `/api/login/` | Login & Get JWT Token |
| `GET` | `/api/dashboard/` | Fetch Financial Data |
| `POST` | `/api/logout/` | Logout User |
| `GET` | `/api/profile/` | Fetch User Profile |

---

## 🛠️ 6. Technologies Used
### **Frontend (React)**
- **ReactJS**
- **Redux Toolkit**
- **React Router**
- **Material UI**
- **Axios**

### **Backend (Django)**
- **Django Rest Framework (DRF)**
- **JWT Authentication**
- **SQLite Database**
- **CORS Handling**

---

## 🛠️ 7. Deployment (Optional)
### 🔹 Deploy Django API on Render/Heroku
```bash
pip install gunicorn
```
Then create a `Procfile`:
```
web: gunicorn backend.wsgi
```
Deploy to **Heroku/Render**.

### 🔹 Deploy React App on Vercel
```bash
npm run build
vercel deploy
```

---

## 🛠️ 8. Contribution Guide
- **Fork** the repository.
- **Create a new branch** for your feature.
- **Commit changes** with meaningful messages.
- **Push the branch** and open a **Pull Request**.

---

## 🛠️ 9. License
This project is licensed under the **MIT License**.

---
```

