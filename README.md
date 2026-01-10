DineEase — Full-Stack Restaurant Management & Reservation System

1. Introduction
1.1 Purpose

DineEase is an end-to-end full-stack web application designed to streamline restaurant management and enhance the customer dining experience. The system provides a digital platform for table reservations, user authentication, and restaurant interaction using modern web technologies.

1.2 Target Audience

Customers: Users who want to explore restaurants and book tables online.

Restaurant Staff / Admins: Personnel responsible for managing reservations and registered users.

Developers: Learners and professionals interested in MERN stack architecture and secure authentication workflows.

1.3 Learning Outcomes

Implementation of secure JWT-based authentication

Password encryption using Bcrypt.js

State management in React using Hooks and Context API

Handling asynchronous API calls with Axios

Building responsive user interfaces using modern CSS

2. System Overview
2.1 User Roles
Role	Description
Guest	Can browse the home page and view restaurant information
Customer	Can register, log in, and make table reservations
Admin	Can view registered users and manage reservation schedules
2.2 Core Features

User Authentication: Secure registration and login functionality

Real-time Feedback: Notifications using react-hot-toast for success and error messages

Session Management: Persistent login using HTTP-only cookies

Auto Redirect: Registration success page with countdown timer

3. High-Level Architecture

DineEase follows the MERN (MongoDB, Express.js, React.js, Node.js) architecture pattern:

Frontend: React.js (Single Page Application)

Backend: Node.js & Express.js (RESTful APIs)

Database: MongoDB Atlas (Cloud)

Security: JWT for authorization and Bcrypt for password hashing

Architecture Flow
React (Port 5173)
     ↓  CORS
Express (Port 4000)
     ↓  Mongoose
MongoDB Atlas

4. Database Design
4.1 Collections
Reservation Collection
_id: 695fc816344ffbb4201cebcd
firstName: "Hema"
lastName: "DineEase"
email: "hema@test.com"
phone: "1234567890"
time: "07:00 PM"
date: "2026-01-10"

User Collection
_id: 6960d36124adaeae4a2f5607
name: "Hema"
email: "hema@test.com"
password: "$2b$10$ly09ZcynjlHLa9QfjNkoW.CRiho5UOw.4V0TvX81tX36g03T5YCMm"

5. Backend API Design
Project Structure
Backend/
│── config/
│   └── config.env
│── database/
│   └── dbConnection.js
│── app.js
│── server.js
│── package.json

File Responsibilities

app.js → Express app configuration

server.js → Server startup and database connection

database/ → MongoDB connection logic

config.env → Environment variables

6. Frontend Architecture
Project Structure
src/
├── components/      # Reusable UI components (Navbar, ProtectedRoute)
├── pages/           # Home, Register, Success
├── App.jsx          # Routing & Toast Provider
├── App.css          # Global styling
└── main.jsx         # Application entry point

7. Security Considerations

HTTP-Only Cookies: Protects JWT tokens from XSS attacks

Password Salting & Hashing: Using bcrypt.hash() with salt rounds of 10

Route Protection: ProtectedRoute component restricts unauthorized access

Input Validation: Backend validation using validator library

8. Development Workflow

Backend setup with MongoDB connection and error middleware

Schema design with pre-save password hashing

API development for registration and login

Frontend integration using Axios

Testing authentication flow, token persistence, and redirects

9. Conclusion

DineEase is a full-stack MERN-based restaurant management and reservation system that demonstrates secure authentication, structured architecture, and modern frontend practices. The application simplifies restaurant operations while offering customers a smooth and intuitive reservation experience.
