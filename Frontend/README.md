# Expense Tracker Frontend

A modern and responsive Expense Tracker application built with React, TypeScript, Tailwind CSS, and Ant Design.

## Features

### Authentication

- User Registration
- User Login
- Protected Routes
- JWT-based Authentication
- Persistent Login State

### Dashboard

- Total Expenses Overview
- Monthly Expenses Summary
- Transaction Count
- Recent Transactions
- Monthly Expense Trend Chart
- Category-wise Expense Breakdown Chart

### Expense Management

- Add Expense
- Edit Expense
- Delete Expense
- View Expense History
- Search Expenses
- Filter Expenses by Category
- Responsive Expense Listing

### User Experience

- Responsive Design
- Loading Skeletons
- Empty States
- Error Handling
- Toast Notifications
- Reusable UI Components

---

## Tech Stack

### Frontend

- React 18
- TypeScript
- React Router DOM
- Axios
- Ant Design
- Tailwind CSS
- Recharts

### Development Tools

- Vite
- ESLint
- Prettier

---

## Project Structure

```text
src
│
├── api
│   ├── axios.ts
│   ├── endpoints.ts
│   └── services
│
├── components
│   ├── common
│   └── ui
│
├── config
│
├── constants
│
├── context
│
├── features
│   ├── auth
│   ├── dashboard
│   └── expense
│
├── hooks
│
├── layouts
│
├── pages
│
├── routes
│
├── types
│
└── utils
```

---

## Environment Variables

Create a `.env.local` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd expense-tracker-client
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

Application will run on:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

## API Integration

The frontend communicates with the backend using Axios.

Configured features:

- Authentication APIs
- Dashboard APIs
- Expense APIs
- Authorization via JWT Token
- Global Request Interceptors

---

## Charts

Dashboard includes:

### Monthly Expense Trend

Visual representation of expenses over time using a line chart.

### Category Breakdown

Donut chart showing distribution of expenses across categories.

---

## Responsive Design

The application is fully responsive and optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

## Future Improvements

- Dark Mode
- Export Expenses to CSV
- Pagination
- Budget Management
- Advanced Analytics
- Category Management

---

## Author

Subroto Chakraborty

Frontend Developer | React Developer | MERN Stack Developer
