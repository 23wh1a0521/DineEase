# 🍽️ DineEase - Full Stack Restaurant Management & Reservation System

DineEase is a modern full-stack **Restaurant Management and Table Reservation Web Application** designed for both restaurant owners and customers. It simplifies the dining experience by offering digital reservations, secure user authentication, menu browsing, and smooth restaurant operations.

Built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**, DineEase provides a responsive interface, secure login system and seamless booking management. 

---

## 📌 Features

### 🔐 User Authentication
- Secure User Registration
- Login System using JWT Authentication
- Password Encryption using bcryptjs
- Persistent Login Sessions using HTTP-only Cookies

### 🍴 Customer Features
- Browse Restaurants
- View Menus
- Book Tables Online
- Smooth Reservation Experience

### ⚡ Smart User Experience
- Real-time Success/Error Alerts using react-hot-toast
- Auto Redirect after Registration
- Countdown Success Page
- Responsive UI Design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3
- React Hot Toast

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication & Security
- JWT
- bcryptjs
- HTTP-only Cookies

---

## 🏗️ System Architecture

Frontend (React.js SPA)  
⬇  
Backend API (Node.js + Express.js)  
⬇  
MongoDB Database

---

## 📂 Project Structure

### Backend

Backend/

├── config/

│ └── config.env

├── database/

│ └── dbConnection.js

├── app.js

├── server.js

└── package.json


### Frontend

src/

├── components/

├── Pages/

├── App.jsx

├── App.css

└── main.jsx


---

## 🗄️ Database Schema

### User Collection

- _id
- name
- email
- password (hashed)

---

## 🔗 Core Functionalities

### Authentication APIs
- Register User
- Login User
- Logout User

### Reservation Features
- Book Table

### Order Features
- Order food
- view Order History

---

## 🔒 Security Features

- JWT Token Authentication
- Password Hashing with bcryptjs
- HTTP-only Cookies
- Route Protection
- Email Validation using validator
- Unauthorized Access Prevention

---

## ⚙️ Development Workflow

1. Setup Backend Server & MongoDB Connection  
2. Create User Schema with Password Hashing  
3. Build Register/Login APIs  
4. Integrate Frontend Forms with Axios  
5. Add Protected Routes  
6. Test Authentication & Session Flow  

---

## 🌟 Future Enhancements

- Payment Gateway Integration
- Live Table Availability
- Restaurant Reviews & Ratings

---

## 📌 Conclusion

DineEase is a complete MERN Stack restaurant web application built to modernize restaurant operations and improve customer experience. It provides secure authentication, online reservations, responsive design.

---

