
import { Link } from "react-router-dom";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.11.82-.27.82-.6v-2.1c-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.33-1.83-1.33-1.83-1.09-.77.08-.75.08-.75 1.2.09 1.84 1.27 1.84 1.27 1.07 1.88 2.8 1.34 3.49 1.02.11-.8.42-1.34.76-1.65-2.66-.31-5.47-1.38-5.47-6.13 0-1.36.47-2.46 1.24-3.33-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.27a11.2 11.2 0 0 1 6 0c2.29-1.6 3.3-1.27 3.3-1.27.66 1.71.24 2.97.12 3.28.77.87 1.24 1.97 1.24 3.33 0 4.76-2.81 5.81-5.49 6.12.43.38.81 1.13.81 2.28v3.38c0 .33.22.72.83.6C20.57 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M18.24 2h3.02l-6.6 7.54L22.5 22h-6.08l-4.76-6.23L5.2 22H2.17l7.06-8.07L1.5 2h6.23l4.3 5.69L18.24 2Zm-1.06 18h1.67L7.9 3.9H6.1l11.08 16.1Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo.svg"
              alt="Movie World"
              className="h-[25px] w-[30px]"
            />
            <span className="font-display text-xl tracking-wide text-white">
              Movie <span className="text-bulb">World</span>
            </span>
          </Link>

          <div className="flex items-center gap-4" aria-label="Social links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-fog transition-colors hover:text-white"
            >
              <GithubIcon />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="text-fog transition-colors hover:text-white"
            >
              <XIcon />
            </a>
          </div>
        </div>

        <div className="mt-3 text-sm text-fog">
          <div>
            <p>© 2026 Movie World. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
