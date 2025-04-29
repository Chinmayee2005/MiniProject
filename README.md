# 🍽️ Food Wastage Management System (MERN Stack)

A full-stack web application designed to reduce food wastage by connecting **Donors**, **Volunteers/NGOs**, and **Receiver Partners** efficiently. Built with the MERN Stack, the platform supports role-based dashboards, real-time chat, and geolocation-based volunteer assignments using OpenStreetMap.

## 🚀 Live Demo

👉 [View Live Project]https://680f68647af2346f4c0c01c1--resplendent-haupia-522b1a.netlify.app/

---

## 👨‍💻 Features

### 🔐 Authentication
- JWT-based secure login and signup
- OTP verification via email (login)
- Role-based route protection

### 👤 Donor Dashboard
- Donate food via form
- View & cancel donations
- Track donation stats
- Edit profile details
- Notifications and real-time chat with admin/volunteers

### 🚴 Volunteer Dashboard
- View assigned donations
- Update pickup status
- View pickup history
- View receiver schedules
- Real-time chat with admin

### 🤝 Receiver Partner Dashboard
- View and request available donations
- Track request status
- View assigned volunteers
- Real-time chat with admin

### 🛠 Admin Dashboard
- Approve/reject user registrations
- Assign nearest volunteer using OpenStreetMap
- Manage donation requests
- View all users and orders
- Real-time chat with any user
- 🔒 Admin button hidden by default, triggered using `Ctrl + Shift + A`

---

## 💡 Project Highlights

- 📍 **Geolocation-based volunteer assignment** using OpenStreetMap
- 📧 **Email alerts** using Nodemailer
- 🔐 **OTP verification** for secure login
- 💬 **Real-time chat** between admin and users via Socket.io
- 👁️ **Admin button hidden** for security, accessible via `Ctrl + Shift + A`
- 📊 **Statistics dashboard** using Redux Toolkit

---

## 🧰 Tech Stack

### 🌐 Frontend
- React.js (Vite)
-  CSS
- React Router DOM

### 🛠 Backend
- Node.js
- Express.js
- JWT for Authentication
- Nodemailer
- Socket.io

### 💾 Database
- MongoDB
- Mongoose ODM

### 📡 APIs & Tools
- OpenStreetMap API
- Nodemailer
- Socket.io (for real-time communication)

---

## 📁 Folder Structure

