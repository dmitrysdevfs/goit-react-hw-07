# Homework Assignment 6

This project is part of the **React 2.0** course in the **FSON-112** group. It
is built using **Vite** and deployed on **Vercel**.

## Overview

This project demonstrates the implementation of **state management with Redux**.
The application allows users to add new contacts, filter the contact list, and
store data persistently using **Redux Persist** for local storage.

### Tech Stack

- **React** – Frontend library
- **Redux** – State management library
- **Redux Toolkit** – Modern API for Redux
- **Redux Persist** – Library for persisting Redux state
- **Vite** – Fast development and build tool
- **Vercel** – Deployment platform

### Features

- **Integrated Redux store**:
  - Centralized state management with `configureStore`.
  - Root reducer split into `contacts` and `filters` reducers.
  - Added `createSlice` for cleaner and more structured reducer logic.
- **Action creators for state updates**:

  - Implemented actions for adding, deleting, and filtering contacts.

- **Simplified reducer updates**:

  - Used `Immer` (via Redux Toolkit) for direct and immutable state
    modifications.

- **Persistent state**:

  - Configured **Redux Persist** to save contact data (`contacts.items`) in
    local storage, ensuring data is retained between sessions.

- **Dynamic contact list**:
  - Users can add, delete, and filter contacts in real-time using a responsive
    UI.

### Migration Highlights

This project was refactored from using local React state (`useState`) to a
global state management system with Redux. Key steps in the migration:

1. Installed Redux and related libraries, configured the Redux store.
2. Integrated action creators, reducers, and dispatch functionality.
3. Replaced `createAction` with `createSlice` for optimized reducer management.
4. Enhanced reducers using `Immer` for simpler and immutable state updates.
5. Implemented Redux Persist to save contact data persistently in local storage.

---

The application remains deployed on **Vercel** and continues to utilize **Vite**
for fast development and builds.
