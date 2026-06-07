# Expense Tracker

A full-stack expense management application that helps users track, manage, and analyze their spending habits through an intuitive dashboard and expense management system.

## Overview

This project consists of:

- Frontend: React + TypeScript application
- Backend: Node.js + Express REST API
- Database: MongoDB
- Authentication: JWT-based authentication

Users can:

- Register and Login
- Create, Update, and Delete Expenses
- Search and Filter Expenses
- View Expense History
- Track Spending Trends
- Analyze Expenses by Category
- View Dashboard Analytics

---

## Tech Stack

### Frontend

- React 18
- TypeScript
- React Router
- Ant Design
- Tailwind CSS
- Axios
- Recharts

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Zod Validation

---

## Features

### Authentication

- User Registration
- User Login
- Protected Routes
- Public Route Guards
- JWT Token Authentication

### Dashboard

- Total Expenses
- Monthly Expenses
- Transaction Count
- Recent Transactions
- Expense Trend Analytics
- Category Breakdown Charts

### Expense Management

- Add Expense
- Edit Expense
- Delete Expense
- Search Expenses
- Filter by Category
- Cursor-based Pagination

### User Experience

- Responsive Design
- Mobile Friendly Interface
- Loading Skeletons
- Error Handling
- Empty States
- Toast Notifications

---

## Architecture

```text
Frontend (React)
        │
        ▼
 REST API (Express)
        │
        ▼
   MongoDB
```

### Frontend Structure

```text
features/
├── auth
├── dashboard
└── expense
```

### Backend Structure

```text
src/
├── controllers
├── services
├── routes
├── middleware
├── validations
├── models
└── utils
```

---

## Performance Optimizations

### Frontend

- Route-based Lazy Loading
- Debounced Search
- React.memo for List Rendering
- Dashboard Data Caching
- Cursor-based Pagination

### Backend

- Aggregation Pipelines
- Cursor Pagination
- Lean Queries
- Parallel Queries using Promise.all

---

## API Endpoints

### Authentication

```http
POST /auth/register
POST /auth/login
```

### Dashboard

```http
GET /dashboard
```

### Expenses

```http
GET    /expenses/history
POST   /expenses
PUT    /expenses/:id
DELETE /expenses/:id
```

---

## Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd expense-tracker
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

### Backend

```bash
cd backend

npm install

npm run dev
```

---

## Environment Variables

### Frontend

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### Backend

```env
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
JWT_EXPIRES_IN=7d
```

---

## Future Enhancements

- Budget Tracking
- Recurring Expenses
- Export Reports (CSV/PDF)
- Dark Mode
- Optimize api using React query
- Infinite Scrolling
- PWA Support
- Email Notifications

---

## Author

**Subroto Chakraborty**
Frontend Developer | Full Stack Developer
Built as a modern full-stack expense tracking application demonstrating scalable frontend architecture, REST API design, authentication, pagination, analytics, and performance optimization.
