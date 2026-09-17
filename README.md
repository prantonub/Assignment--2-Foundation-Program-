# Movie World

A polished, responsive movie and TV show discovery app. Browse a full
catalog, search by title, and open a details modal for any show.

## Features

- Home page with a hero section, a live poster collage, a feature overview,
  and a "what's on the catalog" strip.
- Movies page listing all shows in a responsive card grid.
- Search by title with a short debounce, showing a live result count.
- Movie details modal with poster, rating, release date, runtime, status,
  genres, network, and a clean synopsis. Closes via the X button, the Close
  button, an outside click, or the Escape key, and locks background scroll
  while open.
- Loading, error, and empty states, including a "Try Again" retry flow.
- About and Contact pages, linked from the navbar.
- Fully responsive from 320px phones up to 1440px desktops, with a mobile
  navigation menu and no horizontal overflow.
- Accessible by default: semantic HTML, labeled inputs, keyboard-friendly
  modal, visible focus states, and meaningful alt text.

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