# 🎬 Movie Site React

A modern movie discovery web application built with **React** and **Vite**. The application uses **The Movie Database (TMDB) API** to display popular movies, search for movies, and manage a personal favourites list.

## ✨ Features

- 🎥 Browse popular movies
- 🔎 Search for movies by title
- ❤️ Add movies to favourites
- 🗑️ Remove movies from favourites
- 💾 Persist favourites using browser `localStorage`
- 📱 Responsive movie grid layout
- 🧭 Client-side navigation with React Router
- ⏳ Loading states while fetching movies
- ⚠️ Error handling for failed API requests
- 🧩 Reusable React components

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **React Router DOM**
- **The Movie Database (TMDB) API**
- **JavaScript (ES6+)**
- **CSS**
- **ESLint**
- **Browser LocalStorage**

## 📂 Project Structure

```text
Movie-Site-React/
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── MovieCard.jsx
    │   │   └── Navbar.jsx
    │   ├── contexts/
    │   │   └── MovieContext.jsx
    │   ├── css/
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   └── Favourites.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    └── eslint.config.js