# Homework Assignment 7

This project is part of the **React 2.0** course in the **FSON-112** group. It
is built using **Vite** and deployed on **Vercel**.

## Overview

This project demonstrates the implementation of **asynchronous state management
in Redux** with API integration. Instead of storing contact data in
`localStorage` using Redux Persist, the application now interacts with a backend
API hosted on **mockapi.io**, fetching and managing contacts dynamically.

### Tech Stack

- **React** – Frontend library
- **Redux Toolkit** – Modern Redux API
- **Async Thunk** – Middleware for handling asynchronous operations
- **mockapi.io** – Backend service for storing contact data
- **Vite** – Fast development and build tool
- **Vercel** – Deployment platform

### Features

- **Connected Redux store to an external API**:
  - Contacts are now fetched from `mockapi.io` instead of local storage.
  - Asynchronous requests handled using `createAsyncThunk`.
- **Dynamic contact management**:

  - Users can **add, delete, and filter contacts** with real-time updates from
    the backend.
  - Contact data is fetched upon component mount and remains synchronized with
    the server.

- **Refactored Redux structure**:
  - Removed `redux-persist` and local storage persistence.
  - Implemented API interactions via `asyncThunk` actions.

### Migration Highlights

This project was refactored to replace **local state persistence** with a
**backend-driven approach**. Key steps in the migration:

1. Removed `redux-persist` and cleaned up its configuration.
2. Integrated **mockapi.io** as a backend service for storing contacts.
3. Refactored Redux actions and reducers to support **async API calls**.
4. Used `createAsyncThunk` to handle contact retrieval and updates dynamically.

---

The application remains deployed on **Vercel** and continues to utilize **Vite**
for fast development and builds.
