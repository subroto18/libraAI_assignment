# Expense Tracker API

A RESTful Expense Tracker Backend built with Node.js, Express.js, MongoDB, and JWT Authentication.

## Features

### Authentication

- User Registration
- User Login
- JWT-based Authentication
- Protected Routes

### Expense Management

- Create Expense
- Update Expense
- Delete Expense
- Get Expense Details
- Get Expense History
- Search Expenses
- Filter Expenses by Category

### Dashboard

- Total Expenses
- Current Month Expenses
- Total Transactions
- Recent Transactions

### Validation & Error Handling

- Request Validation using Zod
- Centralized Error Handling
- Custom Error Codes
- Consistent API Response Structure

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Zod Validation

---

## Project Structure

```text
src
│
├── config
├── constants
├── controllers
├── middlewares
├── model
├── routes
├── services
├── utils
├── validations
│
└── server.js
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd expense-tracker-backend
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGODB_URI=<mongodb_connection_string>

JWT_SECRET=<jwt_secret>

JWT_EXPIRES_IN=7d
```

### Run Application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

## Authentication APIs

### Register User

```http
POST /api/auth/register
```

Request Body

```json
{
  "name": "Subroto",
  "email": "subro@example.com",
  "password": "password123"
}
```

---

### Login User

```http
POST /api/auth/login
```

Request Body

```json
{
  "email": "subro@example.com",
  "password": "password123"
}
```

Response

```json
{
  "token": "<jwt_token>"
}
```

---

## Expense APIs

### Create Expense

```http
POST /api/expenses
```

Headers

```http
Authorization: Bearer <jwt_token>
```

Request Body

```json
{
  "title": "Lunch",
  "amount": 250,
  "category": "Food",
  "description": "Lunch with friends",
  "expenseDate": "2026-06-05"
}
```

---

### Update Expense

```http
PUT /api/expenses/:id
```

---

### Delete Expense

```http
DELETE /api/expenses/:id
```

---

### Get Expense Details

```http
GET /api/expenses/:id
```

---

### Get Expense History

```http
GET /api/expenses
```

Query Parameters

```http
?page=1
&limit=10
&search=lunch
&category=Food
```

---

## Dashboard API

### Get Dashboard Data

```http
GET /api/expenses/dashboard
```

Response

```json
{
  "totalExpenses": 25000,
  "monthlyExpenses": 8000,
  "transactionCount": 45,
  "recentTransactions": []
}
```

---

## Categories

Available Categories

```text
Food
Travel
Shopping
Entertainment
Bills
Health
Education
Other
```

---

## Authentication Flow

1. Register User
2. Login User
3. Receive JWT Token
4. Send Token in Authorization Header
5. Access Protected Routes

Example

```http
Authorization: Bearer <jwt_token>
```

---

## Validation

All incoming requests are validated using Zod.

Examples:

- Required Fields
- Positive Amount Validation
- Category Validation
- Date Validation

---

## Error Response Format

```json
{
  "success": false,
  "code": "VALIDATION_ERROR",
  "message": "Validation failed"
}
```

---

## Success Response Format

```json
{
  "success": true,
  "message": "Expense created successfully",
  "data": {}
}
```

---

## Author

Subroto Chakraborty
Frontend Developer | MERN Stack Developer
