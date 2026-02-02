# Performance Test – Module 3 JavaScript
________________________________________

## Student Information

- **Name:** Isabel Cristina Moreno Arboleda  
- **Identification:** 1014291512  
- **Email:** ichristinama.23@gmail.com  
- **GitHub Profile:** https://github.com/ChrisKZer0  
- **Clan:** Morning – Thomson  

---

## Repository Access

### View Repository

The complete source code for this performance test is available at the following GitHub repository:

https://github.com/RIWI-ZerO/EXAM-M3

### Clone Repository

To clone the repository locally, follow the official GitHub documentation:

https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository

---

## Project Description

This performance test consists of the development of a **Single Page Application (SPA)** focused on a **CRUD-based academic task management system**.

The application was designed and implemented based on the following Figma prototype, which served as the visual and functional reference for the project:

https://www.figma.com/design/K3PmKIOlfEsjnbwP54Yc2x/Sin-t%C3%ADtulo?node-id=33-2

The goal of the test is to demonstrate the correct application of the concepts studied throughout **Module 3**, including state handling, routing, API simulation, authentication, and role-based access.

---

## Topics Covered During the Module

Throughout the development of this project, the following topics were applied and reinforced:

- **Advanced DOM manipulation:**  
  Dynamic creation, modification, and rendering of HTML elements using JavaScript without relying on frameworks.

- **Data persistence with LocalStorage:**  
  Storage and retrieval of user session data to maintain authentication state across page reloads.

- **API consumption using Fetch:**  
  Interaction with a simulated REST API through asynchronous requests, handling responses, and managing errors using Promises.

- **Single Page Application (SPA) routing:**  
  Implementation of dynamic routing logic to render different views without reloading the page.

- **Authentication and role management:**  
  Simulation of a login and registration system with differentiated access for administrator and standard user roles.

- **JSON Server usage:**  
  Simulation of a backend service to manage users and tasks, allowing CRUD operations through a fake API.

- **Validations and error handling:**  
  Control of user input, prevention of invalid data submission, and handling of application errors.

- **Good programming practices:**  
  Modular file organization, separation of concerns, reusable components, and clean JavaScript structure.

---

## Tools Used

The following tools were used during the development of this performance test:

- Web browser (Google Chrome or Mozilla Firefox)  
- Visual Studio Code (VS Code)  
- Node.js (version 18 or higher)  
- json-server  

---

## Technologies Implemented

The project was developed using the following technologies, as required in the test statement:

- **HTML5** for structure  
- **CSS3** for styling  
- **CSS frameworks** for layout and visual support:
  - Bootstrap 5  
  - Materialize  
  - Foundation  
  - Bulma  
  - Tailwind CSS  
- **Vanilla JavaScript**, without external frameworks  
- **JSON Server** as a fake REST API  
- **LocalStorage / SessionStorage** for session management  

---

## Application Scope

The developed application includes the following features within its scope:

- Simulated user authentication system  
- Role-based access control (administrator and user)  
- Consumption of a fake API using JSON Server  
- Task creation, editing, deletion, and visualization  
- Administrative panel with basic metrics  
- Session persistence  
- Clear separation of views based on user roles  

---

## Project Structure

TEST/
├── index.html
├── styles.css
├── db.json
├── package.json
├── package-lock.json
├── README.md
├── Enunciado Prueba.pdf
├── Pictures/
└── src/
    ├── app.js
    ├── api.js
    ├── data.js
    ├── components/
    │   └── navbar.js
    ├── core/
    │   └── render.js
    ├── router/
    │   └── router.js
    ├── state/
    │   └── state.js
    └── views/
        ├── dashboard.js
        ├── details.js
        ├── login.js
        ├── register.js
        ├── profiles.js
        └── tasks.js

# CRUDZASO - Task Management Application

## Overview

CRUDZASO is a full-stack task management application built with React (TypeScript) on the frontend and Express on the backend. The project combines a modern React SPA with server-side API capabilities, featuring user authentication, task CRUD operations, and a responsive UI built with shadcn/ui components and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack React Query for server state, localStorage for session persistence
- **UI Components**: shadcn/ui component library (Radix UI primitives + Tailwind CSS)
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: HTTP server with Vite middleware in development
- **API Pattern**: RESTful routes prefixed with `/api`
- **Storage**: In-memory storage interface with PostgreSQL-ready schema

### Build & Development
- Development: `npm run dev` - Runs Express with Vite middleware for HMR
- Production build: `npm run build` - Vite builds client, esbuild bundles server
- Database migrations: `npm run db:push` - Pushes schema to database

## External Dependencies

### UI Framework
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **Lucide React**: Icon library

### Data Fetching
- **TanStack React Query**: Server state management and caching

### Development Tools
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **TypeScript**: Type checking across client, server, and shared code

### Session Management
- **connect-pg-simple**: PostgreSQL session store (available for future auth implementation)

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolver integration
- **Zod**: Schema validation (via drizzle-zod)

## Technical Implementation

### Frontend

- **State Management:** `state.js` was implemented to manage the user session using `localStorage`.
- **Dynamic Rendering:** The application detects if there is an active session to automatically display the `Login` or `Dashboard`.
- **Styles:** **Tailwind CSS** was integrated for a modern and responsive design, including lift-off effects on task cards.
- **Navigation:** Basic functional navigation system (Login -> Dashboard -> Logout).

### Backend (Simulated)

- **JSON Server:** `db.json` was configured with initial data to allow immediate testing.
- **Integration:** The frontend is ready to consume data from `http://localhost:3000/tasks` (or the corresponding path on the server).


## Test Credentials

- **Username:** `admin@crudsazo.com`
- **Password:** `123456`
- **Role:** Admin