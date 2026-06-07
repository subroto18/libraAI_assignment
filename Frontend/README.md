# Expense Tracker Frontend

A modern expense management application built with React, TypeScript, Ant Design, and Tailwind CSS. The application allows users to manage expenses, visualize spending patterns, and track financial activities through an intuitive dashboard.

## Features

### Authentication

- User Login
- User Registration
- Protected Routes
- Public Route Guard
- JWT Authentication
- Persistent Login State
- Logout Functionality

### Dashboard

- Total Expenses Summary
- Current Month Expense Summary
- Total Transaction Count
- Recent Transactions
- Expense Trend Chart
- Category-wise Expense Breakdown Chart
- Loading Skeletons
- Error State Handling

### Expense Management

- Create Expense
- Update Expense
- Delete Expense
- View Expense History
- Search Expenses
- Filter Expenses by Category
- Cursor-based Pagination
- Load More Functionality
- Responsive Expense List

### User Experience

- Responsive Design
- Mobile Friendly UI
- Custom Reusable UI Components
- Loading States
- Error States
- Empty States
- Form Validation
- Toast Notifications

---

## Tech Stack

### Core

- React 18
- TypeScript
- React Router v7
- Axios

### UI

- Ant Design
- Tailwind CSS v4
- Ant Design Icons

### Charts

- Recharts

### Utilities

- Moment.js

---

## Project Structure

```bash
src
│
├── api
│   ├── services
│   └── config
│
├── components
│   ├── common
│   └── ui
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
├── layout
│
├── route
│
├── types
│
├── utils
│
└── pages
```

---

## Dashboard Features

### Statistics

Displays:

- Total Expenses
- Monthly Expenses
- Transaction Count

### Expense Trend Chart

Visualizes expense trends month-wise using a line chart.

### Category Breakdown Chart

Visualizes category-wise spending distribution using a pie chart.

### Recent Transactions

Displays the latest transactions with:

- Category Tags
- Expense Date
- Amount

---

## Expense Management Features

### Expense List

Displays:

- Expense Title
- Category
- Description
- Expense Amount
- Expense Date

### Expense Actions

- Edit Expense
- Delete Expense

### Search

Debounced search implementation to reduce API calls.

```text
User Types
    ↓
500ms Debounce
    ↓
API Call
```

### Category Filter

Filter expenses by:

- Food
- Travel
- Shopping
- Bills
- Health
- Education

### Pagination

Cursor-based pagination implementation.

Benefits:

- Faster than offset pagination
- Better scalability
- Infinite-scroll friendly

Implementation:

```text
Fetch First Page
    ↓
Receive nextCursor
    ↓
Load More
    ↓
Pass cursor
    ↓
Receive next page
```

---

## Reusable UI Components

### Components

- Button
- Input
- InputNumber
- Select
- Modal
- Avatar
- CategoryTag
- Container

### States

- Loading Skeleton
- Empty State
- Error State

---

## Routing

### Public Routes

Accessible only when not authenticated.

```text
/auth/login
/auth/register
```

### Protected Routes

Accessible only after authentication.

```text
/
/dashboard
/expenses
```

---

## Performance Optimizations

### React Lazy Loading

Implemented route-level code splitting.

Lazy Loaded Pages:

- Login Page
- Register Page
- Dashboard Page
- Expense Page

Benefits:

- Smaller initial bundle
- Faster page load
- Better user experience

### Debounced Search

Reduces unnecessary API calls during typing.

### Cursor Pagination

Efficient data loading for large datasets.

### Dashboard Caching

Dashboard data is cached in memory to prevent unnecessary API requests when navigating between pages.

---

## Error Handling

Centralized error handling using utility functions.

Example:

```typescript
getErrorMessage(error);
```

Supports:

- API Errors
- Validation Errors
- Unknown Errors

---

## Utility Functions

### Date Formatting

```typescript
formatDate(date);
formatDateTime(date);
formatMonthYear(date);
```

### Currency Formatting

```typescript
formatCurrency(amount);
```

### String Helpers

```typescript
truncateText(text);
capitalize(text);
getShortId(id);
```

---

## API Integration

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

Supports:

- Search
- Category Filter
- Cursor Pagination

---

## Installation

```bash
git clone <repository-url>

cd expense-tracker-frontend

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

## Future Improvements

- Dark Mode
- Infinite Scrolling
- Export Expenses (CSV/PDF)
- Expense Budget Tracking
- Category Management
- Advanced Analytics
- React Query Integration
- Offline Support
- PWA Support

---

## Author

Subroto Chakraborty

Frontend Developer | React | TypeScript | Next.js
