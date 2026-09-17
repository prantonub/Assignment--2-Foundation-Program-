# Movie World

A responsive movie and TV show discovery app built with React. Browse shows, search by title, and view detailed information in an interactive modal.

## Features

- Modern Home page with hero section, poster collage, and catalog highlights.
- Responsive movie catalog with title search and debounced results.
- Detailed movie modal with rating, release date, runtime, genres, network, and synopsis.
- Robust loading, error, empty, and retry states.
- About and Contact pages with responsive navigation.
- Fully responsive design from mobile to desktop with no horizontal overflow.
- Accessible UI with semantic HTML, keyboard-friendly interactions, focus states, and descriptive alt text.

## Stack
- React
- React Router
- Tailwind CSS v4
- Vite
- Lucide React
- TVMaze API

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Logo.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── MovieModal.jsx
│   ├── SearchBar.jsx
│   ├── LoadingSkeleton.jsx
│   ├── ErrorState.jsx
│   └── EmptyState.jsx
├── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── services/
│   └── tvmazeApi.js
├── utils/
│   └── format.js
├── hooks/
│   └── useDebouncedValue.js
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

**Vercel**
LIVE: https://movie-world-prantonub.vercel.app/