DineEase — Full-Stack Restaurant Management & Reservation System
DineEase is an end-to-end full-stack web application designed to streamline restaurant management and enhance the customer dining experience. The system provides a digital platform for table reservations and secure user authentication using modern web technologies.

1. Introduction
1.1 Purpose
DineEase serves as a technical solution for restaurant interaction, allowing users to browse, register, and book tables digitally while providing admins with a structured way to manage restaurant traffic.

1.2 Target Audience
Customers: Users who want to explore restaurants and book tables online.
Restaurant Staff / Admins: Personnel responsible for managing reservations and registered users.
Developers: Learners interested in MERN stack architecture and secure authentication workflows.

1.3 Learning Outcomes
Implementation of secure JWT-based authentication.
Password encryption using Bcrypt.js.
State management in React using Hooks and Context API.
Handling asynchronous API calls with Axios.
Building responsive user interfaces using modern CSS.

2. System Overview
2.1 User Roles
Role	Description
Guest	Can browse the home page and view restaurant information.
Customer	Can register, log in, and make table reservations.
Admin	Can view registered users and manage reservation schedules.

2.2 Core Features
User Authentication: Secure registration and login functionality.
Real-time Feedback: Instant notifications using react-hot-toast.
Session Management: Persistent login using HTTP-only cookies.
Auto Redirect: Registration success page with an automated countdown timer.

4. High-Level Architecture
DineEase follows the MERN (MongoDB, Express.js, React.js, Node.js) architecture pattern.
Architecture Flow: React (Port 5173) → Express (Port 4000) → MongoDB Atlas (Cloud)

5. Database Design:Collections
Reservation Collection
Field	Data Example
_id	695fc816344ffbb4201cebcd
firstName	"Hema"
lastName	"DineEase"
email	"hema@test.com"
phone	"1234567890"
time	"07:00 PM"
date	"2026-01-10"

User Collection
Field	Data Example
_id	6960d36124adaeae4a2f5607
name	"Hema"
email	"hema@test.com"
password	$2b$10$... 

5. Project Structure
Backend
Backend/
│── config/             # Environment variables (config.env)
│── database/           # MongoDB connection logic
│── models/             # Mongoose schemas (User, Reservation)
│── controller/         # Business logic functions
│── error/              # Custom error handling middleware
│── app.js              # Express app configuration
└── server.js           # Server startup entry point

Frontend
src/
├── components/         # Reusable UI (Navbar, ProtectedRoute)
├── pages/              # Home, Register, Success
├── App.jsx             # Routing & Toast Provider
├── App.css             # Global styling
└── main.jsx            # Application entry point

7. Security Considerations
HTTP-Only Cookies: Protects JWT tokens from XSS (Cross-Site Scripting) attacks.
Password Salting & Hashing: Utilizes bcrypt.hash() with salt rounds of 10.
Route Protection: A ProtectedRoute component restricts unauthorized access to sensitive pages.
Input Validation: Backend validation using the validator library for email and required fields.

8. Development Workflow
Backend Setup: Configure MongoDB connection and global error middleware.
Schema Design: Define Mongoose models with pre-save password hashing.
API Development: Create RESTful endpoints for registration and login.
Frontend Integration: Connect React forms to the backend using Axios.
Testing: Verify authentication flow, token persistence, and redirect logic.

9. Conclusion
DineEase is a robust demonstration of a modern MERN stack application. It bridges the gap between secure backend logic and an intuitive frontend, providing a seamless reservation experience for customers and a structured management tool for restaurant operators.

